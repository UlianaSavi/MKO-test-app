import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INewMessageData } from '../../models/message.model';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { Store } from '@ngrx/store';
import { createMessageAction } from 'src/app/store/actions/messages.actions';
import { PanelsVisibleService } from '../../serviсes/panelsVisible.service';
import { ComponentNames } from '../../models/components-names.model';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  constructor(
    private panelsVisibleService: PanelsVisibleService,
    private store: Store<IAppState>)
  {}

  createMessageDataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  setCreateModalVisible = (status: boolean) => {
    this.panelsVisibleService.setVisibleStatus(status, ComponentNames.CreateModalComponent)
  }

  submitForm = (e: SubmitEvent) => {
    e.preventDefault();

    if (this.createMessageDataForm.valid) {
      this.setCreateModalVisible(false);

      const formsData: INewMessageData = {
        username: this.createMessageDataForm.controls.name.value || '',
        datetime: this.createMessageDataForm.controls.date.value || '',
        message: this.createMessageDataForm.controls.message.value || ''
      };

      this.store.dispatch(createMessageAction({ newMessage: formsData }))
    }
  }
}

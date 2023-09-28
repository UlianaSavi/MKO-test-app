import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';
import { ApiService } from '../../serviсes/api.service';
import { INewMessageData } from '../../models/message.model';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
    private apiSrvice: ApiService)
  {}

  createMessageDataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  setCreateModalVisible = (status: boolean) => {
    this.panelsOpenService.setCreateModalVisibleStatus(status);
  }

  submitForm = async (e: SubmitEvent) => {
    e.preventDefault();

    if (this.createMessageDataForm.valid) {
      this.setCreateModalVisible(false);

      const formsData: INewMessageData = {
        username: this.createMessageDataForm.controls.name.value || '',
        datetime: this.createMessageDataForm.controls.date.value || '',
        message: this.createMessageDataForm.controls.message.value || ''
      };

      await this.apiSrvice.create(formsData);
    }
  }
}

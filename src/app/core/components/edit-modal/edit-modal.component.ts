import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { IMessage } from '../../models/message.model';
import { selectMessages } from 'src/app/store/selectors/messages.selectors';
import { updateMessageAction } from 'src/app/store/actions/messages.actions';
import { PanelsVisibleService } from '../../serviсes/panelsVisible.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  constructor(
    private panelsVisibleService: PanelsVisibleService,
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) {}

  routeSubscription: Subscription | null = null;

  isSidebarVisible = true;

  messages$: Observable<IMessage[]> = this.store.pipe(select(selectMessages));

  message: IMessage | null = null;

  EditMessageDataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  setEditModalVisible = (status: boolean) => {
    this.panelsVisibleService.setVisibleStatus(status, EditModalComponent.name);
  }

  messageDataForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      const id = params['id'] || 0;

      if (id !== 0) {
        this.messages$.subscribe(((messages) => {
          const selected = messages.find((message) => message.id === +id) || null;
          this.message = selected;
        }));
      }

      this.messageDataForm.setValue({
        message: this.message?.message || ''
     });
    });
  }

  submitForm = (e: SubmitEvent) => {
    e.preventDefault();

    if (this.messageDataForm.valid && this.message) {
      this.setEditModalVisible(false);

      const formsData = {
        message: this.messageDataForm.controls.message.value || '',
      };

      const updated: IMessage = {
        id: this.message?.id,
        username: this.message?.username,
        datetime: this.message?.datetime,
        message: formsData.message,
      }

      this.store.dispatch(updateMessageAction({ updatedMessage: updated }))
    }
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }
}

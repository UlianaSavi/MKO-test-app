import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';
import { IMessage, INewMessageData } from '../../models/message.model';
import { selectMessages } from 'src/app/store/selectors/messages.selectors';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
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
    this.panelsOpenService.setEditModalVisibleStatus(status);
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

  submitForm = async (e: SubmitEvent) => {
    e.preventDefault();

    if (this.messageDataForm.valid) {
      this.setEditModalVisible(false);

      const formsData = {
        message: this.messageDataForm.controls.message.value || ''
      };

      // this.apiSrvice.create(formsData); TODO: store.dispath edit Action
    }
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }
}

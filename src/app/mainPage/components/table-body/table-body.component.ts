import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/core/models/message.model';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';
import { loadAllMessagesAction } from 'src/app/store/actions/messages.actions';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { selectMessages } from 'src/app/store/selectors/messages.selectors';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {
  constructor(private panelsOpenService: PanelsOpenService,
  private store: Store<IAppState>)
  {}

  messages$: Observable<IMessage[]> = this.store.pipe(select(selectMessages));

  messages: IMessage[] = [];

  selectedMessageId = 0;

  ngOnInit() {
    this.store.dispatch(loadAllMessagesAction());
    this.messages$.subscribe(((messages) => {
      this.messages = messages;
    }));
  }

  setSidebarVisible = () => {
    this.panelsOpenService.setSidebarVisibleStatus(true);
  }

  onSelect(message: IMessage | null) {
    this.setSidebarVisible();

    this.selectedMessageId = message?.id || 0;
  }
}

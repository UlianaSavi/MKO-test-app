import { Component, Input } from '@angular/core';
import { Subscription, Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSearchStr } from 'src/app/store/selectors/messages.selectors';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';
import { IMessage } from 'src/app/core/models/message.model';
import { IAppState } from 'src/app/store/reducers/messages.reducer';

@Component({
  selector: 'app-table-body-item',
  templateUrl: './table-body-item.component.html',
  styleUrls: ['./table-body-item.component.scss']
})
export class TableBodyItemComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
    private store: Store<IAppState>,
  ) {}

  @Input() message: IMessage | null = null;

  @Input() selectedMessageId: number | null = null;

  isCreateModalVisible = false;

  searchStr$: Observable<string> = this.store.pipe(select(selectSearchStr));

  searchStr = '';

  editModalVisibleSubscription: Subscription | null = null;

  ngOnInit() {
    this.searchStr$.subscribe(((str) => {
      this.searchStr = str;
    }));
  }

  setDeleteModalVisible = () => {
    this.panelsOpenService.setDeleteModalVisibleStatus(true);
  }
}

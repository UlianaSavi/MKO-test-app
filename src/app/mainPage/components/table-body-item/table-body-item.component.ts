import { Component, Input } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSearchStr } from 'src/app/store/selectors/messages.selectors';
import { IMessage } from 'src/app/core/models/message.model';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { PanelsVisibleService } from 'src/app/core/serviсes/PanelsVisible.service';
import { ComponentNames } from 'src/app/core/models/componentsNames.model';

@Component({
  selector: 'app-table-body-item',
  templateUrl: './table-body-item.component.html',
  styleUrls: ['./table-body-item.component.scss']
})
export class TableBodyItemComponent {
  constructor(
    private panelsVisibleService: PanelsVisibleService,
    private store: Store<IAppState>,
  ) {}

  @Input() message: IMessage | null = null;

  @Input() selectedMessageId: number | null = null;

  searchStr$: Observable<string> = this.store.pipe(select(selectSearchStr));

  searchStr = '';

  ngOnInit() {
    this.searchStr$.subscribe(((str) => {
      this.searchStr = str;
    }));
  }

  setDeleteModalVisible = () => {
    this.panelsVisibleService.setVisibleStatus(true, ComponentNames.DeleteModalComponent);
  }
}

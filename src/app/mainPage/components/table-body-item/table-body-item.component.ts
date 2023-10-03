import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSearchStr } from 'src/app/store/selectors/messages.selectors';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { PanelsVisibleService } from 'src/app/core/serviсes/panels-visible.service';
import { ComponentNames } from 'src/app/core/models/components-names.model';
import { KeyValue } from '@angular/common';
import { ITableBodyItemData } from '../../models/table-body-item-data.model';

@Component({
  selector: 'app-table-body-item',
  templateUrl: './table-body-item.component.html',
  styleUrls: ['./table-body-item.component.scss'],
})
export class TableBodyItemComponent {
  constructor(
    private panelsVisibleService: PanelsVisibleService,
    private store: Store<IAppState>,
  ) {}

  @Input() tableBodyItem: ITableBodyItemData = {};
  @Input() selectedMessageId: number = 0;

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

  keys() {
    return Object.keys(this.tableBodyItem) as (keyof ITableBodyItemData)[];
  }
}

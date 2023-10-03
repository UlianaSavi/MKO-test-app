import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef, createComponent } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ComponentNames } from 'src/app/core/models/components-names.model';
import { IMessage } from 'src/app/core/models/message.model';
import { Icolumn } from 'src/app/core/models/table-config.model';
import { ApiService } from 'src/app/core/serviсes/api.service';
import { PanelsVisibleService } from 'src/app/core/serviсes/panels-visible.service';
import { loadAllMessagesAction } from 'src/app/store/actions/messages.actions';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { selectMessages } from 'src/app/store/selectors/messages.selectors';
import { ITableBodyItemData } from '../../models/table-body-item-data.model';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {
  constructor(private panelsVisibleService: PanelsVisibleService,
    private apiService: ApiService,
    private store: Store<IAppState>)
  {}

  messages$: Observable<IMessage[]> = this.store.pipe(select(selectMessages));

  messages: IMessage[] = [];

  selectedMessageId = 0;

  currentPage: number = 1;

  collection = this.messages;

  columns: Icolumn[] = []; // array of visible columns

  tableBodyItemsData: ITableBodyItemData[] = []; // data for generate table items

  ngOnInit() {
    this.store.dispatch(loadAllMessagesAction());
    this.messages$.subscribe(((messages) => {
      this.messages = messages;

      this.apiService.getConfig().subscribe((config) => {
        this.columns = config.content.columns.filter((column) => column.isVisible === 'true');

        this.setTableBodyItemData();
      });
    }));
  }

  setTableBodyItemData = () => {
    const arr: ITableBodyItemData[] = this.messages.map((message) => this.columns.reduce((acc, column) => ({
      ...acc,
      [column.type]: message[column.type as keyof typeof message] + '',
    }), {}));

    this.tableBodyItemsData = arr;
  }

  setSidebarVisible = () => {
    this.panelsVisibleService.setVisibleStatus(true, ComponentNames.SidebarComponent);
  }

  onSelect = (messageId: number) => {
    this.setSidebarVisible();
    this.selectedMessageId = messageId;
  }
}

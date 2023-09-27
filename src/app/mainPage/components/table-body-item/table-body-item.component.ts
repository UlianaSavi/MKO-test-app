import { Component, Input } from '@angular/core';
import { IMessage } from 'src/app/core/models/message.model';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-body-item',
  templateUrl: './table-body-item.component.html',
  styleUrls: ['./table-body-item.component.scss']
})
export class TableBodyItemComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
  ) {}

  @Input() message: IMessage | null = null;

  selected = false; //TODO: change selected by click

  isCreateModalVisible = false;

  editModalVisibleSubscription: Subscription | null = null;

  setSidebarVisible = () => {
    this.panelsOpenService.setSidebarVisibleStatus(true);
  }

  setDeleteModalVisible = () => {
    this.panelsOpenService.setDeleteModalVisibleStatus(true);
  }
}

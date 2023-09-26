import { Component } from '@angular/core';
import { SidebarService } from 'src/app/core/serviсes/sidebar.servise';

@Component({
  selector: 'app-table-body-item',
  templateUrl: './table-body-item.component.html',
  styleUrls: ['./table-body-item.component.scss']
})
export class TableBodyItemComponent {
  constructor(
    private sidebarService: SidebarService,
  ) {}

  selected = false;

  setSidebarVisible = () => {
    this.sidebarService.setSingInStatus(true);
    // this.selected = true; // TODO: only one can be selected
  }
}

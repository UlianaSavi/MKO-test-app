import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableBodyItemComponent } from './components/table-body-item/table-body-item.component';
import { TableNavComponent } from './components/table-nav/table-nav.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    TableBodyComponent,
    TableBodyItemComponent,
    TableNavComponent,
    TableComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [TableComponent]
})
export class TableModule { }

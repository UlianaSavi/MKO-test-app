import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableBodyItemComponent } from './components/table-body-item/table-body-item.component';
import { TableNavComponent } from './components/table-nav/table-nav.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { EditModalComponent } from '../core/components/edit-modal/edit-modal.component';



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
    NgxPaginationModule,
    RouterModule,
    CoreModule
  ],
  exports: [TableComponent]
})
export class TableModule { }

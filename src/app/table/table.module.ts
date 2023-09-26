import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTitleComponent } from './components/table-title/table-title.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableBodyItemComponent } from './components/table-body-item/table-body-item.component';
import { TableNavComponent } from './components/table-nav/table-nav.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TableTitleComponent,
    TableBodyComponent,
    TableBodyItemComponent,
    TableNavComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TableComponent]
})
export class TableModule { }

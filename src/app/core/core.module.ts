import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    EditModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    EditModalComponent,
  ],
})
export class CoreModule { }

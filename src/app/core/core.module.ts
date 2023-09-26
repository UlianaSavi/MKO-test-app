import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    EditModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    EditModalComponent,
    ConfirmModalComponent
  ],
})
export class CoreModule { }

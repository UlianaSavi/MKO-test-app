import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { RouterModule } from '@angular/router';
import { CreateModalComponent } from './components/create-modal/create-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    EditModalComponent,
    DeleteModalComponent,
    CreateModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    EditModalComponent,
    DeleteModalComponent,
    CreateModalComponent,
  ],
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditModalComponent } from './core/components/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './core/components/delete-modal/delete-modal.component';
import { TableComponent } from './mainPage/components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full'},
  { path: 'messages', component: TableComponent,},
  { path: 'messages/:id', component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

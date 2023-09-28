import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableBodyItemComponent } from './components/table-body-item/table-body-item.component';
import { TableNavComponent } from './components/table-nav/table-nav.component';
import { TableComponent } from './components/table/table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreModule } from '../core/core.module';
import { messagesReducer } from '../store/reducers/messages.reducer';
import { MessagesEffects } from '../store/effects/messages.effects';


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
    CoreModule,
    StoreModule.forFeature('messages', messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
  ],
  exports: [TableComponent]
})
export class TableModule { }

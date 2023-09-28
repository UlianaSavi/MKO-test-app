import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './mainPage/table.module';
import { StoreModule } from '@ngrx/store';
import { messagesReducer } from './store/reducers/messages.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CoreModule,
    StoreModule.forRoot(messagesReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

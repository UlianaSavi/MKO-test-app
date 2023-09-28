import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError, EMPTY } from 'rxjs';
import * as MessagesActions from '../actions/messages.actions';
import { ApiService } from 'src/app/core/serviсes/api.service';

@Injectable()
export class MessagesEffects {
  loadAllMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.loadAllMessagesAction),
      switchMap(() =>
        this.apiService
          .getAll()
          .pipe(map((messages) => MessagesActions.setAllMessagesAction({ messages })))
      ),
      catchError(() => EMPTY)
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}

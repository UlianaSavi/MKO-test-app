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
      catchError(() => EMPTY),
    );
  });
  createNewMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.createMessageAction),
      switchMap((action) =>
        this.apiService
          .create(action.newMessage)
          .pipe(map((newMessage) => MessagesActions.setNewMessageAction({ newMessage })))
      ),
      catchError(() => EMPTY)
    )
  });
  updateMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.updateMessageAction),
      switchMap((action) =>
        this.apiService
          .update(action.updatedMessage)
          .pipe(map((updatedMessage) => MessagesActions.setUpdatedMessageAction({ updatedMessage })))
      ),
      catchError(() => EMPTY)
    )
  });
  deleteMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.deleteMessageAction),
      switchMap((action) =>
        this.apiService
          .delete(action.deletedMessageId)
          .pipe(map(() => MessagesActions.setDeletedMessageAction({ deletedMessageId: action.deletedMessageId })))
      ),
      catchError(() => EMPTY)
    )
  });
  searchMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.searchAction),
      switchMap((action) =>
        this.apiService
          .search(action.search)
          .pipe(map((messages) => MessagesActions.setMessagesAfterSearchAction({ messagesAfterSearch: messages })))
      ),
      catchError(() => EMPTY)
    )
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}

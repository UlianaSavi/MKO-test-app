import { createAction, props } from '@ngrx/store';
import { IMessage } from 'src/app/core/models/message.model';

export const setAllMessagesAction = createAction(
  '[Table Component] SetAllMessage',
  props<{ messages: IMessage[] }>()
);

export const createMessageAction = createAction(
  '[CreatePopap Component] CreateMessage',
  props<{ message: IMessage }>()
);

export const loadAllMessagesAction = createAction('[Table Component] loadMessages');

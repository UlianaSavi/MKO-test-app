import { createAction, props } from '@ngrx/store';
import { IMessage, INewMessageData } from 'src/app/core/models/message.model';

export const setAllMessagesAction = createAction(
  '[Table Component] SetAllMessage',
  props<{ messages: IMessage[] }>()
);

export const createMessageAction = createAction(
  '[CreatePopap Component] CreateMessage',
  props<{ newMessage: INewMessageData }>()
);

export const setNewMessageAction = createAction(
  '[Table Component] setNewMessage',
  props<{ newMessage: IMessage }>()
);

export const loadAllMessagesAction = createAction('[Table Component] loadMessages');

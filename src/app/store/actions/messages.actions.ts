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

export const updateMessageAction = createAction(
  '[EditPopap Component] EditMessage',
  props<{ updatedMessage: IMessage }>()
);

export const setUpdatedMessageAction = createAction(
  '[Table Component] SetUpdatedMessage',
  props<{ updatedMessage: IMessage }>()
);




export const deleteMessageAction = createAction(
  '[DeletePopap Component] DeleteMessage',
  props<{ deletedMessageId: number }>()
);

export const setDeletedMessageAction = createAction(
  '[Table Component] SetDeletedMessage',
  props<{ deletedMessageId: number }>()
);

export const loadAllMessagesAction = createAction('[Table Component] loadMessages');

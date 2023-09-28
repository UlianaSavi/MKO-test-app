import { createAction, props } from '@ngrx/store';
import { IMessage } from 'src/app/core/models/message.model';

export const getAllMessageAction = createAction(
  '[Table Component] GetAllMessage',
  props<{ messages: IMessage[] }>()
);

export const createMessageAction = createAction(
  '[CreatePopap Component] CreateMessage',
  props<{ message: IMessage }>()
);

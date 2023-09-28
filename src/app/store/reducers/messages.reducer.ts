import { Action, createReducer, on } from '@ngrx/store';
import * as MessagesActions from '../actions/messages.actions';
import { IMessage } from 'src/app/core/models/message.model';

export interface IAppState {
  messages: IMessage[] | [];
}

export const initialState: IAppState = {
  messages: []
};

const _messagesReducer = createReducer(initialState,
  on(MessagesActions.setAllMessagesAction,
    (state, { messages }) => ({
      messages: [...messages]
  })),
  on(MessagesActions.setNewMessageAction,
    (state, { newMessage }) => ({
      ...state,
      messages: [...state.messages, newMessage]
  })),
);

export function messagesReducer(state: IAppState, action: Action) {
  const res = _messagesReducer(state, action);
  return res;
}

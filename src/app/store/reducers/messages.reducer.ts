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
      ...state,
      messages: [...state.messages, ...messages]
    })),
);

export function messagesReducer(state: IAppState, action: Action) {
  const res = _messagesReducer(state, action);
  return res;
}

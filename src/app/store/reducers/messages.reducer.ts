import { Action, createReducer, on } from '@ngrx/store';
import * as MessagesActions from '../actions/messages.actions';
import { IMessage } from 'src/app/core/models/message.model';

export interface IAppState {
  messages: IMessage[] | [],
  searchStr?: string,
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
  on(MessagesActions.setUpdatedMessageAction,
    (state, { updatedMessage }) => {
      const condidate = state.messages.findIndex((item) => item.id === updatedMessage.id);
      const messages = [...state.messages];
      if (condidate !== -1) {
        messages[condidate] = updatedMessage;
      }
      return { ...state, messages };
  }),
  on(MessagesActions.setDeletedMessageAction,
    (state, { deletedMessageId }) => ({ ...state, messages: state.messages.filter((item) => item.id !== +deletedMessageId) })),
  on(MessagesActions.setMessagesAfterSearchAction,
    (state, { messagesAfterSearch, searchStr }) => ({ ...state, messages: messagesAfterSearch, searchStr: searchStr })),
);

export function messagesReducer(state: IAppState, action: Action) {
  const res = _messagesReducer(state, action);
  return res;
}

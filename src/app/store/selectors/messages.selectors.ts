import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../reducers/messages.reducer';


export const selectMessages = createSelector(
  createFeatureSelector<IAppState>('messages'),
  (data: IAppState) => data.messages,
);

export const selectSearchStr = createSelector(
  createFeatureSelector<IAppState>('searchStr'),
  (data: IAppState) => data?.searchStr || 'asd',
);


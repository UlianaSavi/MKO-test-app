import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMessage } from "src/app/core/models/message.model";

export const selectMessages = createSelector(
  createFeatureSelector('Messages'),
  (messages: IMessage[]) => messages
);

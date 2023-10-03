import { INewMessageData } from "./message.model"

export interface INewMessageResponse {
  id: number,
  params: {
    body: INewMessageData
  }
}

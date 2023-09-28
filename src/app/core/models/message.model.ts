export interface IMessage {
  id: number,
  username: string,
  datetime: string,
  message: string,
}

export interface INewMessageData {
  username: string,
  datetime: string,
  message: string,
}

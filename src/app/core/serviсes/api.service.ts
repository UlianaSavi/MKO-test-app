import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage, INewMessageData } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private static URL = 'http://localhost:3000';
  private static MESSAGES_ROUTE = '/messages';

  getAll = () => {
    const res = this.http.get<IMessage[]>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
    return res;
  }

  getById = (id: number) => {
    const res = this.http.get<IMessage>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
    return res;
  }

  create = (dataToCreate: INewMessageData) => {
    const res = this.http.post<IMessage>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {body: dataToCreate},
      responseType: 'json',
    });
    return res;
  }

  update = (id: number, dataToUpdate: IMessage) => {
    const res = this.http.put<IMessage>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {body: dataToUpdate},
      responseType: 'json',
    });
    return res;
  }

  delete = (id: number) => {
    const res = this.http.delete(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }
}

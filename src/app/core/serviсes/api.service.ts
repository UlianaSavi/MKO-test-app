import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage, INewMessageData } from '../models/message.model';
import { ITableConfig } from '../models/table-config.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private static URL = 'http://localhost:3000';
  private static MESSAGES_ROUTE = '/messages';
  private static CONFIG_URL = '/table-config';

  getConfig = () => {
    const res = this.http.get<ITableConfig>(`${ApiService.URL}${ApiService.CONFIG_URL}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
    return res;
  }

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
    const res = this.http.post<IMessage>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}`, dataToCreate, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
    return res;
  }

  update = (dataToUpdate: IMessage) => {
    const res = this.http.put<IMessage>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}/${dataToUpdate.id}`, dataToUpdate, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
    return res;
  }

  delete = (id: number) => {
    const res = this.http.delete<IMessage>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }

  search = (searchStr: string) => {
    if (searchStr.match(/\\/)) {
      return this.http.get<IMessage[]>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}?message_like=${/\//}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'json',
      });
    }
    if (!searchStr.length) {
      return this.http.get<IMessage[]>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'json',
      });
    }
    return this.http.get<IMessage[]>(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}?message_like=${searchStr}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }
}

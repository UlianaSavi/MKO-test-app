import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private static URL = 'http://localhost:3000';
  private static MESSAGES_ROUTE = '/messages';

  getAll = async () => {
    let res: IMessage[] | null = null;
    try {
      const data = await fetch(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      res = await data.json()
    } catch (error) {
      console.log(error);
    }

    return res;
  }

  getById = async (id: string) => {
    const res = await fetch(`${ApiService.URL}${ApiService.MESSAGES_ROUTE}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return res;
  }

  create = async (id: string, dataToCreate: IMessage) => {
    const res = await fetch(`${ApiService.URL}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataToCreate }),
    });

    return res;
  }

  update = async (id: string, dataToUpdate: IMessage) => {
    const res = await fetch(`${ApiService.URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataToUpdate }),
    });

    return res;
  }

  remove = async (id: string) => {
    const res = await fetch(`${ApiService.URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

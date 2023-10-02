import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IViewlePanel } from '../models/IViewlePanel.model';

@Injectable({
  providedIn: 'root'
})
export class PanelsVisibleService {
  private viewPanel$$ = new Subject<IViewlePanel>();

  viewPanel$ = this.viewPanel$$.asObservable();

  setVisibleStatus(status: boolean, context: string) {
    const data: IViewlePanel = {
      context: context,
      status: status
    };
    this.viewPanel$$.next(data);
  }
}

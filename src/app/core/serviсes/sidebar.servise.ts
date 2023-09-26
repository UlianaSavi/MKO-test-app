import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isSidebarVisible$$ = new Subject<boolean>();

  isSidebarVisible$ = this.isSidebarVisible$$.asObservable();

  setSingInStatus(status: boolean) {
    this.isSidebarVisible$$.next(status);
  }
}

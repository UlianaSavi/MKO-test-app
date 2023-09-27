import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelsOpenService {

  private isSidebarVisible$$ = new Subject<boolean>();

  isSidebarVisible$ = this.isSidebarVisible$$.asObservable();

  private isEditModalVisible$$ = new Subject<boolean>();

  isEditModalVisible$ = this.isEditModalVisible$$.asObservable();

  private isCreateModalVisible$$ = new Subject<boolean>();

  isCreateModalVisible$ = this.isCreateModalVisible$$.asObservable();

  private isDeleteModalVisible$$ = new Subject<boolean>();

  isDeleteModalVisible$ = this.isDeleteModalVisible$$.asObservable();

  setSidebarVisibleStatus(status: boolean) {
    this.isSidebarVisible$$.next(status);
  }

  setEditModalVisibleStatus(status: boolean) {
    this.isEditModalVisible$$.next(status);
  }

  setDeleteModalVisibleStatus(status: boolean) {
    this.isDeleteModalVisible$$.next(status);
  }

  setCreateModalVisibleStatus(status: boolean) {
    this.isCreateModalVisible$$.next(status);
  }
}

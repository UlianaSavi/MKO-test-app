import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private panelsOpenService: PanelsOpenService) {}

  isEditModalVisible = false;

  isCreateModalVisible = false;

  isDeleteModalVisible = false;

  editModalVisibleSubscription: Subscription | null = null;

  createModalVisibleSubscription: Subscription | null = null;

  deleteModalVisibleSubscription: Subscription | null = null;

  async ngOnInit() {
    this.editModalVisibleSubscription = this.panelsOpenService.isEditModalVisible$.subscribe(
      (status) => (this.isEditModalVisible = status)
    );
    this.createModalVisibleSubscription = this.panelsOpenService.isCreateModalVisible$.subscribe(
      (status) => (this.isCreateModalVisible = status)
    );
    this.deleteModalVisibleSubscription = this.panelsOpenService.isDeleteModalVisible$.subscribe(
      (status) => (this.isDeleteModalVisible = status)
    );
  }

  ngOnDestroy() {
    this.editModalVisibleSubscription?.unsubscribe();
    this.createModalVisibleSubscription?.unsubscribe();
  }
}

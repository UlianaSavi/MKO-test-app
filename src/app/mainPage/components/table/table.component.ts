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
  editModalVisibleSubscription: Subscription | null = null;

  async ngOnInit() {
    this.editModalVisibleSubscription = this.panelsOpenService.isEditModalVisible$.subscribe(
      (status) => (this.isEditModalVisible = status)
    );
  }

  ngOnDestroy() {
    this.editModalVisibleSubscription?.unsubscribe();
  }
}

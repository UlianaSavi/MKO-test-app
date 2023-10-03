import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentNames } from 'src/app/core/models/components-names.model';
import { PanelsVisibleService } from 'src/app/core/serviсes/panelsVisible.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private panelsVisibleService: PanelsVisibleService) {}

  isEditModalVisible = false;

  isCreateModalVisible = false;

  isDeleteModalVisible = false;

  visibleSubscription: Subscription | null = null;

  ngOnInit() {
    this.visibleSubscription = this.panelsVisibleService.viewPanel$.subscribe(
      (data) => {
        if (data.context === ComponentNames.EditModalComponent) {
          this.isEditModalVisible = data.status;
        }
        if (data.context === ComponentNames.CreateModalComponent) {
          this.isCreateModalVisible = data.status;
        }
        if (data.context === ComponentNames.DeleteModalComponent) {
          this.isDeleteModalVisible = data.status;
        }
      }
    )
  }

  ngOnDestroy() {
    this.visibleSubscription?.unsubscribe();
  }
}

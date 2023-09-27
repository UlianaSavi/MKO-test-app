import { Component } from '@angular/core';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(private panelsOpenService: PanelsOpenService){}

  setDeleteModalVisible = () => {
    this.panelsOpenService.setDeleteModalVisibleStatus(false);
  }
}

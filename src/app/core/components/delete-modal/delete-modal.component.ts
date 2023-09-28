import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';
import { ApiService } from '../../serviсes/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
    private apiSrvice: ApiService,
    private route: ActivatedRoute
  ){}

  setDeleteModalVisible = (status: boolean) => {
    this.panelsOpenService.setDeleteModalVisibleStatus(status);
  }

  routeSubscription: Subscription | null = null;

  selectedId = 0;

  delete = async () => {
    this.setDeleteModalVisible(false);

    this.routeSubscription = this.route.params.subscribe((params) => {
      this.selectedId = params['id'] || 0;
    });

    if (this.selectedId > 0) {
      this.apiSrvice.delete(this.selectedId);
    }
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }
}

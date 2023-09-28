import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';
import { ApiService } from '../../serviсes/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { deleteMessageAction } from 'src/app/store/actions/messages.actions';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private router: Router,
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
      this.store.dispatch(deleteMessageAction({ deletedMessageId: this.selectedId }));
      this.router.navigate(['/messages']);
    }
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }
}

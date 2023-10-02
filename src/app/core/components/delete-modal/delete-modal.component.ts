import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { deleteMessageAction } from 'src/app/store/actions/messages.actions';
import { PanelsVisibleService } from '../../serviсes/PanelsVisible.service';
import { ComponentNames } from '../../models/componentsNames.model';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    private panelsVisibleService: PanelsVisibleService,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private router: Router,
  ){}

  setDeleteModalVisible = (status: boolean) => {
    this.panelsVisibleService.setVisibleStatus(status, ComponentNames.DeleteModalComponent);
  }

  routeSubscription: Subscription | null = null;

  selectedId = 0;

  delete = () => {
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

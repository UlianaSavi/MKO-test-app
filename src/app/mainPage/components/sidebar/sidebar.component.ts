import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { IMessage } from 'src/app/core/models/message.model';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';
import { IAppState } from 'src/app/store/reducers/messages.reducer';
import { selectMessages } from 'src/app/store/selectors/messages.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) {}

  routeSubscription: Subscription | null = null;

  isSidebarVisible = true;

  messages$: Observable<IMessage[]> = this.store.pipe(select(selectMessages));

  message: IMessage | null = null;

  emptyMessage = 'Выберите сообщение из таблицы для отображения информации.';

  showemptyMessage = false;

  selectedId = 0;

  sidebarStatusSubscription: Subscription | null = null;

  ngOnInit() {
    this.sidebarStatusSubscription = this.panelsOpenService.isSidebarVisible$.subscribe(
      (status) => (this.isSidebarVisible = status)
    );

    this.routeSubscription = this.route.params.subscribe((params) => {
      this.selectedId = params['id'] || 0;

      if (this.selectedId !== 0) {
        this.messages$.subscribe(((messages) => {
          const selected = messages.find((message) => message.id === +this.selectedId) || null;
          this.message = selected;
        }));
      }
      if (this.selectedId === 0) {
        this.showemptyMessage = true;
      }
    });

  }

  setSidebarVisible = () => {
    this.panelsOpenService.setSidebarVisibleStatus(false);
  }

  showEditModal = () => {
    this.panelsOpenService.setEditModalVisibleStatus(true);
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.sidebarStatusSubscription?.unsubscribe()
  }
}

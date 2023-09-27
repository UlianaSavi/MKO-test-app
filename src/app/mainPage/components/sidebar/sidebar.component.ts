import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMessage } from 'src/app/core/models/message.model';
import { ApiService } from 'src/app/core/serviсes/api.service';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private panelsOpenService: PanelsOpenService,
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  routeSubscription: Subscription | null = null;

  isSidebarVisible = true;

  message: IMessage | null = null;

  emptyMessage = 'Выберите сообщение из таблицы для отображения информации.';

  showemptyMessage = false;

  selectedId = 0;

  sidebarStatusSubscription: Subscription | null = null;

  async ngOnInit() {
    this.sidebarStatusSubscription = this.panelsOpenService.isSidebarVisible$.subscribe(
      (status) => (this.isSidebarVisible = status)
    );

    this.routeSubscription = this.route.params.subscribe(async (params) => {
      this.selectedId = params['id'] || 0;

      if (this.selectedId !== 0) {
        const data = await this.apiService.getById(this.selectedId);
        if (data) {
          this.message = data;
        }
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
  }
}

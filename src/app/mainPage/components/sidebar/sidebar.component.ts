import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMessage } from 'src/app/core/models/message.model';
import { ApiService } from 'src/app/core/serviсes/api.service';
import { SidebarService } from 'src/app/core/serviсes/sidebar.servise';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private sidebarService: SidebarService,
    private apiService: ApiService,
  ) {}

  isSidebarVisible = true;

  message: IMessage | null = null;

  sidebarStatusSubscription: Subscription | undefined;

  async ngOnInit() {
    this.sidebarStatusSubscription = this.sidebarService.isSidebarVisible$.subscribe(
      (status) => (this.isSidebarVisible = status)
    );

    const data = await this.apiService.getById('1'); //TODO getting id from Router
    if (data) {
      this.message = data;
    }
  }

  setSidebarVisible = () => {
    this.sidebarService.setSingInStatus(false);
  }
}

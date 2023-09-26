import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/core/serviсes/sidebar.servise';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private sidebarService: SidebarService,
  ) {}

  isSidebarVisible = true;

  sidebarStatusSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.sidebarStatusSubscription = this.sidebarService.isSidebarVisible$.subscribe(
      (status) => (this.isSidebarVisible = status)
    );
  }

  setSidebarVisible = () => {
    this.sidebarService.setSingInStatus(false);
  }
}

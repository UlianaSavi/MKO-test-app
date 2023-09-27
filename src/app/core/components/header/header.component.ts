import { Component } from '@angular/core';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private panelsOpenService: PanelsOpenService) {}

  setCreateModalVisible = () => {
    this.panelsOpenService.setCreateModalVisibleStatus(true);
  }
}

import { Component } from '@angular/core';
import { PanelsVisibleService } from '../../serviсes/PanelsVisible.service';
import { ComponentNames } from '../../models/componentsNames.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private panelsVisibleService: PanelsVisibleService) {}

  setCreateModalVisible = () => {
    this.panelsVisibleService.setVisibleStatus(true, ComponentNames.CreateModalComponent);
  }
}

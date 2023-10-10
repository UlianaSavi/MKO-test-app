import { Component } from '@angular/core';
import { PanelsVisibleService } from '../../serviсes/panels-visible.service';
import { ComponentNames } from '../../models/components-names.model';

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

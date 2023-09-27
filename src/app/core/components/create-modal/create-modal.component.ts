import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  constructor(private panelsOpenService: PanelsOpenService){}

  CreateMessageDataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  setCreateModalVisible = () => {
    this.panelsOpenService.setCreateModalVisibleStatus(false);
  }
}

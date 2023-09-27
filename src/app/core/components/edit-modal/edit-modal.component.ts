import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelsOpenService } from '../../serviсes/panelsOpen.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  constructor(private panelsOpenService: PanelsOpenService){}

  EditMessageDataForm = new FormGroup({
    фыв: new FormControl('', [Validators.required]),
  });

  setEditModalVisible = () => {
    console.log(123);

    this.panelsOpenService.setEditModalVisibleStatus(false);
  }
}

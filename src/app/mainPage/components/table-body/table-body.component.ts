import { Component } from '@angular/core';
import { IMessage } from 'src/app/core/models/message.model';
import { ApiService } from 'src/app/core/serviсes/api.service';
import { PanelsOpenService } from 'src/app/core/serviсes/panelsOpen.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {
  constructor(private apiService: ApiService, private panelsOpenService: PanelsOpenService) {}

  messages: IMessage[] = [];

  selectedMessageId = 0;

  async ngOnInit() {
    const data = await this.apiService.getAll();
    if (data) {
      this.messages = data;
    }
  }

  async ngOnChanges() {
    const data = await this.apiService.getAll();
    if (data) {
      this.messages = data;
    }
  }

  setSidebarVisible = () => {
    this.panelsOpenService.setSidebarVisibleStatus(true);
  }

  onSelect(message: IMessage | null) {
    this.setSidebarVisible();
    console.log(message);

    this.selectedMessageId = message?.id || 0;
  }
}

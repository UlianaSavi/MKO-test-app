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

  ngOnInit() {
    (this.apiService.getAll()).subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (e) => console.log(e),
    })
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

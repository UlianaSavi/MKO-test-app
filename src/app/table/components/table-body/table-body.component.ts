import { Component } from '@angular/core';
import { IMessage } from 'src/app/core/models/message.model';
import { ApiService } from 'src/app/core/serviсes/api.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {
  constructor(private apiService: ApiService) {}

  messages: IMessage[] = [];

  async ngOnInit() {
    const data = await this.apiService.getAll();
    if (data) {
      this.messages = data;
    }
  }
}

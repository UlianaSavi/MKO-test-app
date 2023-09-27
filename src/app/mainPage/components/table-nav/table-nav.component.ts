import { Component } from '@angular/core';

@Component({
  selector: 'app-table-nav',
  templateUrl: './table-nav.component.html',
  styleUrls: ['./table-nav.component.scss']
})
export class TableNavComponent {
  p: number = 1;
  collection: any[] = [1, 2];
}

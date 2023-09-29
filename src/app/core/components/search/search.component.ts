import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { searchAction } from 'src/app/store/actions/messages.actions';
import { IAppState } from 'src/app/store/reducers/messages.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private store: Store<IAppState>) {}

  searchForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  search = () => {
    const strToSearch = this.searchForm.controls.search.value;
    this.store.dispatch(searchAction({ search: strToSearch || '' }))
  }
}

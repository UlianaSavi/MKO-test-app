import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
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

  ngOnInit() {
    this.searchForm.valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe(((str) => {
      this.search(str.search || '');
    }));
  }

  search = (str: string) => {
    this.store.dispatch(searchAction({ searchStr: str }))
  }
}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectList } from '../../reducers';
import { State } from '../../reducers/url-user.reducer';
import { loadUrlUser, deleteUrlUser } from '../../actions';
@Component({
  selector: 'mo-links-url-view',
  templateUrl: './url-view.component.html',
  styleUrls: ['./url-view.component.scss'],
})
export class UrlViewComponent implements OnInit {
  urlList$ = this.store.pipe(select(selectList));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUrlUser());
  }

  deleteUrl(id) {
    this.store.dispatch(deleteUrlUser({ id }));
  }
}

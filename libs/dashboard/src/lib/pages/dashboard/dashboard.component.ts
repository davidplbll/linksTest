import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadUser } from '@mo-links/auth/lib/actions';
import { selectUser } from '@mo-links/auth/lib/reducers';
import { State } from '@mo-links/auth/lib/reducers/user.reducer';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'mo-links-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$ = this.store.pipe(select(selectUser));

  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUser());
  }

  OnLogout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}

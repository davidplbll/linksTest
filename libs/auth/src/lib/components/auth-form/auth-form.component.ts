import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './../../actions';
import { selectLoading } from '../../reducers';
import { State } from '../../reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'mo-links-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnDestroy {
  loginform: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  $loading = this.store.pipe(select(selectLoading), tap(console.log));
  constructor(private fb: FormBuilder, private store: Store<State>) {}
  ngOnDestroy(): void {
    this.loginform.reset();
  }

  onLogin() {
    this.store.dispatch(Login(this.loginform.value));
  }
}

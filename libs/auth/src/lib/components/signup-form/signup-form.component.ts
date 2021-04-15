import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from './../../actions';
import { selectLoading } from '../../reducers';
import { State } from '../../reducers/user.reducer';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'mo-links-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnDestroy {
  userform: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  $loading = this.store.pipe(select(selectLoading), tap(console.log));
  constructor(private fb: FormBuilder, private store: Store<State>) {}

  onregister() {
    this.store.dispatch(RegisterUser(this.userform.value));
  }
  ngOnDestroy(): void {
    this.userform.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createUrlUser } from '../../actions';
import { State } from '../../reducers/url-user.reducer';
@Component({
  selector: 'mo-links-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.scss'],
})
export class UrlFormComponent implements OnInit {
  urlform: FormGroup = this.fb.group({
    url: ['', Validators.required],
    name: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {}

  createUrl() {
    this.store.dispatch(createUrlUser(this.urlform.value));
  }
}

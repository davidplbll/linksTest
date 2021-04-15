import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UrlUserEffects } from './url-user.effects';

describe('UrlUserEffects', () => {
  let actions$: Observable<any>;
  let effects: UrlUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UrlUserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UrlUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

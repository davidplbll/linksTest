import { TestBed } from '@angular/core/testing';

import { UrlUserService } from './url-user.service';

describe('UrlUserService', () => {
  let service: UrlUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

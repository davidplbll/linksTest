import { TestBed } from '@angular/core/testing';

import { ErrorControlService } from './error-control.service';

describe('ErrorControlService', () => {
  let service: ErrorControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

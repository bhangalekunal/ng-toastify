import { TestBed } from '@angular/core/testing';

import { NgToastifyService } from './ng-toastify.service';

describe('NgToastifyService', () => {
  let service: NgToastifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgToastifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

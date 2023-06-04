import { TestBed } from '@angular/core/testing';

import { ProcessusuService } from './processusu.service';

describe('ProcessusuService', () => {
  let service: ProcessusuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessusuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

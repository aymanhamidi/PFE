import { TestBed } from '@angular/core/testing';

import { AjoutUserService } from './ajout-user.service';

describe('AjoutUserService', () => {
  let service: AjoutUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

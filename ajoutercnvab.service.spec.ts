import { TestBed } from '@angular/core/testing';

import { AjoutercnvabService } from './ajoutercnvab.service';

describe('AjoutercnvabService', () => {
  let service: AjoutercnvabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutercnvabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AjouterdraglineService } from './ajouterdragline.service';

describe('AjouterdraglineService', () => {
  let service: AjouterdraglineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterdraglineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

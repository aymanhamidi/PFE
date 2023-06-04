import { TestBed } from '@angular/core/testing';

import { AjoutermoteurService } from './ajoutermoteur.service';

describe('AjoutermoteurService', () => {
  let service: AjoutermoteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutermoteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ConnexionnadministrateurService } from './connexionnadministrateur.service';

describe('ConnexionnadministrateurService', () => {
  let service: ConnexionnadministrateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionnadministrateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ConnexionnutilisateurService } from './connexionnutilisateur.service';

describe('ConnexionnutilisateurService', () => {
  let service: ConnexionnutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionnutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

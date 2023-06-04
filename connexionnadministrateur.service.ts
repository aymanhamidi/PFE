import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from './administrateur';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionnadministrateurService {
  private baseUrl="http://localhost:8081/administrateur/connexion"
  constructor(private httpClient: HttpClient) { }
  public connexionnAdministrateur(administrateur: Administrateur):Observable<object>{
    console.log(administrateur)
    return this.httpClient.post(this.baseUrl, administrateur);
  }
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Utilisateur } from './utilisateur';

// @Injectable({
//   providedIn: 'root'
// })
// export class ConnexionnutilisateurService {
//   private baseUrl = "http://localhost:8081/utilisateur/connexion";

//   constructor(private httpClient: HttpClient) { }

//   connexionnUtilisateur(utilisateur: Utilisateur): Observable<object> {
//     console.log(utilisateur)
//     return this.httpClient.post(this.baseUrl, utilisateur);
//   }
 
// }


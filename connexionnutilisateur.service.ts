// import { HttpClient } from '@angular/common/http';
// import { Injectable, Inject, forwardRef } from '@angular/core';
// import { Observable, tap } from 'rxjs';
// import { Utilisateur } from './utilisateur';
// import { Cnvab } from './cnvab';
// import { AjoutercnvabService } from './ajoutercnvab.service';
// import { AuthService } from './auth.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class ConnexionnutilisateurService {
//   cnvabList: Cnvab[] = [];
//   filteredcnvabList: Cnvab[] = [];
//   private baseUrl = "http://localhost:8081/utilisateur/connexion";
//   public currentUser: number | undefined;
  

//   constructor(
//     private httpClient: HttpClient, 
//     @Inject(forwardRef(() => AjoutercnvabService)) private cnvabService: AjoutercnvabService,
//     @Inject(forwardRef(() => AuthService)) private authService: AuthService
//   ) { }

//   connexionnUtilisateur(utilisateur: Utilisateur): Observable<object> {
//     console.log(utilisateur)
//     return this.httpClient.post(this.baseUrl, utilisateur).pipe(
//       tap((response: any) => {
//         this.authService.setToken(response.token); // stocke le token JWT dans le service AuthService
//         this.currentUser = response.id; // stocke l'ID de l'utilisateur connecté dans currentUser
//       })
//     );
//   }

//   filterCnvabByUser(cnvabList: Cnvab[]): Cnvab[] {
//     return cnvabList.filter(cnvab => cnvab.utilisateur === this.authService.currentUser);
//   }

//   getAllCnvab1(id: number) {
//     this.cnvabService.getAllCnvab1(id).subscribe(data => {
//       this.cnvabList = data;
//       this.filteredcnvabList = this.filterCnvabByUser(this.cnvabList); // Filtrage de la liste cnvabList en fonction de l'utilisateur connecté
//     });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';
import { Userau } from './userau';

@Injectable({
  providedIn: 'root'
})
export class ConnexionnutilisateurService {
  private baseUrl = "http://localhost:8081/utilisateur/connexion";

  constructor(private httpClient: HttpClient) { }
  connexionnUserau(utilisateur: Userau): Observable<object> {
    console.log(utilisateur)
    return this.httpClient.post(this.baseUrl, utilisateur);
  }
 
}
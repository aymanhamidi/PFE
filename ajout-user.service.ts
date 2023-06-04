import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AjoutUserService {

  constructor(private httpClient: HttpClient) { }
  public ajoutUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    console.log(utilisateur)
    utilisateur.sexe = utilisateur.sexe ? true : false;
    console.log("okkkk")
    return this.httpClient.post<Utilisateur>("http://localhost:8081/administrateur/ajouterUtilisateur", utilisateur);
  }

  public getAllUtilisateur(id: number): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>("http://localhost:8081/utilisateur/listUtilisateur/" + id);
  }
  
  public getAllUtilisateur1(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>("http://localhost:8081/utilisateur/listUtilisateur");
}

  public modifierUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.httpClient.put<Utilisateur>("http://localhost:8081/utilisateur/modifierUtilisateur/" + id, utilisateur);
  }
  public supprimerUtilisateur(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8081/utilisateur/supprimerUtilisateur/" + id);
  }
  public getNombreUtilisateur(): Observable<number> {
    return this.httpClient.get<number>("http://localhost:8081/utilisateur/nombre");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moteur } from './moteur';



@Injectable({
  providedIn: 'root'
})
export class AjoutermoteurService {

  currentUser: number = 0;

  constructor(private httpClient: HttpClient) { }
  public ajoutermoteur(moteur: Moteur): Observable<Moteur> {
    console.log(moteur.utilisateur)
    console.log("okkkk")
    return this.httpClient.post<Moteur>("http://localhost:8081/moteur/ajouterMoteur/" + moteur.utilisateur, moteur);
  }

  public getAllMoteur(): Observable<Moteur[]> {
    return this.httpClient.get<Moteur[]>("http://localhost:8081/moteur/listMoteur");
  }

  public getAllMoteur1(id: number): Observable<Moteur[]> {
    return this.httpClient.get<Moteur[]>("http://localhost:8081/moteur/listMoteur/" + id);
  }

  public supprimerMoteur(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8081/moteur/supprimerMoteur/" + id);
  }

  public modifierMoteur(id: number, moteur: Moteur): Observable<Moteur> {
    return this.httpClient.put<Moteur>("http://localhost:8081/moteur/modifierMoteur/" + id, moteur);
  }

  public filterMoteurByUser(moteurList: Moteur[]): Moteur[] {
    return moteurList.filter(moteur => moteur.utilisateur === this.currentUser);
  }

}
import { Observable, tap } from "rxjs";
import { ConnexionnutilisateurService } from "./connexionnutilisateur.service";
import { Injectable } from "@angular/core";
import { Utilisateur } from "./utilisateur";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private loggedIn = false;
    private baseUrl = "http://localhost:8081/utilisateur/connexion";
    public currentUser: number | undefined;
  
    constructor(private connexionService: ConnexionnutilisateurService, private httpClient: HttpClient) {}

  
    login(idUtilisateur: string, idMotdePasse: string): Observable<object> {


      const utilisateur: Utilisateur = {

        id: 0,
        idUtilisateur: idUtilisateur,
        idMotdePasse: idMotdePasse,
        nomComplet: '',
        numTelephone: 0,
        sexe: true,
        grade: '',
        role: '',
      };
      return this.httpClient.post(this.baseUrl, utilisateur).pipe(
        tap((response: any) => {
          this.setToken(response.token);
          this.currentUser = response.id; // stocke l'ID de l'utilisateur connecté
        })
      );
    }
  
    isLoggedIn(): boolean {
      return this.loggedIn;
    }
  
    logout() {
      this.loggedIn = false;
      localStorage.removeItem('currentUser');
    }
  
    setToken(token: string) {
      localStorage.setItem('currentUser', token);
      this.loggedIn = true;
    }
  
    getToken(): string | null {
      return localStorage.getItem('currentUser');
    }
  
    getCurrentUserId(): number | undefined {
      return this.currentUser;
    }
  }
  
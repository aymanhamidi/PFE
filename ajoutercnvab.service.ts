
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cnvab } from './cnvab';

@Injectable({
  providedIn: 'root'
})
export class AjoutercnvabService {
  currentUser: number = 0;

  constructor(private httpClient: HttpClient) { }

  public ajoutercnvab(cnvab: Cnvab): Observable<Cnvab> {
    console.log(cnvab.utilisateur)
    return this.httpClient.post<Cnvab>("http://localhost:8081/cnvab/ajouterCnvab/" + cnvab.utilisateur, cnvab);
  }

  public getAllCnvab(): Observable<Cnvab[]> {
    return this.httpClient.get<Cnvab[]>("http://localhost:8081/cnvab/listCnvab");
}
  public getAllCnvab1(id: number): Observable<Cnvab[]> {
    return this.httpClient.get<Cnvab[]>("http://localhost:8081/cnvab/listCnvab/" + id);
}

  public supprimerCnvab(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8081/cnvab/supprimerCnvab/" + id);
  }

  public modifierCnvab(id: number, cnvab: Cnvab): Observable<Cnvab> {
    return this.httpClient.put<Cnvab>("http://localhost:8081/cnvab/modifierCnvab/" + id, cnvab);
  }
  public filterCnvabByUser(cnvabList: Cnvab[]): Cnvab[] {
    return cnvabList.filter(cnvab => cnvab.utilisateur === this.currentUser);
  }
  public getNombreCnvab(): Observable<number> {
    return this.httpClient.get<number>("http://localhost:8081/cnvab/nombre");
  }
  
}

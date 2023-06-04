import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dragline } from './dragline';



@Injectable({
  providedIn: 'root'
})
export class AjouterdraglineService {
  currentUser: number = 0;

  constructor(private httpClient: HttpClient) { }
  public ajouterdragline(dragline: Dragline): Observable<Dragline> {
    console.log(dragline.utilisateur)
    console.log("okkkk")
    return this.httpClient.post<Dragline>("http://localhost:8081/dragline/ajouterDragline/"+ dragline.utilisateur, dragline);
  }
  public getAllDragline(): Observable<Dragline[]> {
    return this.httpClient.get<Dragline[]>("http://localhost:8081/dragline/listDragline");
  }
  public getAllDragline1(id: number): Observable<Dragline[]> {
    return this.httpClient.get<Dragline[]>("http://localhost:8081/dragline/listDragline/" + id);
  }
  public supprimerDragline(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8081/dragline/supprimerDragline/" + id);
  }
  
  public modifierDragline(id: number, dragline: Dragline): Observable<Dragline> {
    return this.httpClient.put<Dragline>("http://localhost:8081/dragline/modifierDragline/" + id, dragline);
  }
  public filterDraglineByUser(draglineList: Dragline[]): Dragline[] {
    return draglineList.filter(dragline => dragline.utilisateur === this.currentUser);
  }
  public getNombreDragline(): Observable<number> {
    return this.httpClient.get<number>("http://localhost:8081/dragline/nombre");
  }

}

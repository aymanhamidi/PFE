import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processus } from './processus';
import { Observable } from 'rxjs';
import { Cnvab } from './cnvab';

@Injectable({
  providedIn: 'root'
})
export class ProcessusuService {
  private baseUrl = "http://localhost:8081/processus";
  constructor(private httpClient: HttpClient) { }
  getProcessusListu(): Observable<Processus[]> {
    return this.httpClient.get<Processus[]>(this.baseUrl);
  }
  public getAllCnvab(): Observable<Cnvab[]> {
    return this.httpClient.get<Cnvab[]>("http://localhost:8081/cnvab/listCnvab");
}
}

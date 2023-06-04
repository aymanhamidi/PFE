import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processus } from './processus';

@Injectable({
  providedIn: 'root'
})
export class ProcessusService {
  private baseUrl = "http://localhost:8081/processus";
  constructor(private httpClient: HttpClient) { }
  getProcessusList(): Observable<Processus[]> {
    return this.httpClient.get<Processus[]>(this.baseUrl);
  }

}

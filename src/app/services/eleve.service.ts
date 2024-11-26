import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { eleve } from '../../model/eleve.model';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  apiURL: string = 'http://localhost:8090/eleves/api/all';
  eleves! : eleve[]; 
  constructor(private http : HttpClient) { }

  listeeleves(): Observable<eleve[]>{
    return this.http.get<eleve[]>(this.apiURL);
    }

}

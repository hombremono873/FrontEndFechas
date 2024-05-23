import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechasService {
  private url: string; 
  constructor(private http:HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
   }
  public listar(): Observable<any> {
    return this.http.get(`${this.url}listar`);
  }
 
  public verificarFechaFestiva(anio: number, mes: number, dia: number): Observable<string> {
    return this.http.get(`${this.url}verificar/${anio}/${mes}/${dia}`, { responseType: 'text' });
  }
}

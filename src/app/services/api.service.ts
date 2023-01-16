import { Injectable } from '@angular/core';
import { LoginInterface } from '../models/login.interface';
import { ResponseInterface } from '../models/response.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //apikey para el header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'Bearer ${25d467e3719a422e9000c560bac14be7}}'
    })
  };

  //metodo para validar el login con jwt
  loginByEmail(form: LoginInterface): Observable<ResponseInterface> {
    //return this.http.post<ResponseInterface>(`${this.url}/api/Autenticacion/Validar`, form, this.httpOptions);
    return this.http.post<ResponseInterface>('/api/Autenticacion/Validar', form, this.httpOptions);
  }

}

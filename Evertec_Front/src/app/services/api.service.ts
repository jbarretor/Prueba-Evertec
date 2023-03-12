import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonInformation } from '../interfaces/person-information';
import { Response } from 'src/app/interfaces/response';


const httpOption = {
  headers: new HttpHeaders({ 'Contend-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = 'https://localhost:7018/api/PersonalInfo/';
  constructor(private _http: HttpClient) {}

  Create(model: PersonInformation): Observable<Response> {
    return this._http.post<Response>(this._url, model, httpOption);
  }

  Read(): Observable<Response> {
    return this._http.get<Response>(this._url);
  }

  Update(model: PersonInformation): Observable<Response> {
    return this._http.put<Response>(this._url, model, httpOption);
  }

  Delete(id: number): Observable<Response> {
    return this._http.delete<Response>(this._url + id, httpOption);
  }
}

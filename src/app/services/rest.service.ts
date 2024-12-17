import { Injectable } from '@angular/core';
import { ISuperhero } from '../models/ISuperhero.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl : string = 'https://superheroapi.com/api.php/5e40cc8e5a7781d65d900062e96667ec/';
  private busquedaUrl : string = 'https://superheroapi.com/api.php/5e40cc8e5a7781d65d900062e96667ec/search/'

  constructor(private httpClient: HttpClient) { }


  getHero(id:string): Observable<ISuperhero> {
    return this.httpClient.get<ISuperhero>(this.baseUrl + '/' + id);
  }

  searchByName(name: string): Observable<any> {
    const url = this.busquedaUrl + name;
    return this.httpClient.get<any>(url);
  }

}


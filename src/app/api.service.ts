import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private  dataURL:  string  =  "https://swapi.co/api/";
 
  constructor(private httpClient: HttpClient
  ) { }

  list(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(`${this.dataURL}`);
  }

  listPeople(): Observable<any[]> {
    return this.httpClient
    .get<any[]>(`${this.dataURL}people/`);

    // for person in data['results']:
    // return (person['name'])
  }
  listPlanets(): Observable<any[]> {
    return this.httpClient
    .get<any[]>(`${this.dataURL}planets/`);
  }
  listFilms(): Observable<any[]> {
    return this.httpClient
    .get<any[]>(`${this.dataURL}films/`);
  }
  listSpecies(): Observable<any[]> {
    return this.httpClient
    .get<any[]>(`${this.dataURL}species/`);
  }
  listVehicles(): Observable<any[]> {
    return this.httpClient
    .get<any[]>(`${this.dataURL}vehicles/`);
  }
  listStarships(): Observable<any[]> {
    return this.httpClient
    .get<any[]>(`${this.dataURL}starships/`);
  }
  readPeople(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.dataURL}people/${id}`);
  }
  readPlanets(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.dataURL}planets/${id}`);
  }
  readFilms(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.dataURL}films/${id}`);
  }
  readSpecies(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.dataURL}species/${id}`);
  }
  readVehicles(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.dataURL}vehicles/${id}`);
  }
  readStarships(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.dataURL}starships/${id}`);
  }

}

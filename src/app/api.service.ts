import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'https://awesome-rest-green-roots.herokuapp.com/api/jokes';

  constructor( private httpClient: HttpClient ) {}

  getJokeList(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL);
  }
  
}

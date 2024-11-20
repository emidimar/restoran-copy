import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private baseUrl = " https://private-anon-653c042e71-pizzaapp.apiary-mock.com";

  constructor(private http: HttpClient) { }

  getMenu(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }
}

import { Injectable } from '@angular/core';
import { Axios } from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
  }

  getCurrency(urlValuta: string) {
    return this.http.get(`https://api.exchangerate.host/latest?base=${urlValuta}`)
  }
}

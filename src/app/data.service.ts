import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getLocation(cep: string): Promise<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then(response => response)
      .catch(error => console.log(error))


    // return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}

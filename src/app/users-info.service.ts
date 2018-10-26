import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<any> {
    return this.http.get('http://localhost:3000/users')
      .toPromise()
      .then(response => response)
      .catch(error => console.log(error))
  }

  sendUsers(naime) {
    this.http.post('http://localhost:3000/users', {
      name: naime
    })
    .toPromise()
    .then(response => console.log(response))
  }

}

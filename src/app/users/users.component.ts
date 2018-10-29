import { Component, OnInit } from '@angular/core';
import { UsersInfoService } from '../users-info.service';
import { ActivatedRoute } from '@angular/router';

class User {
  public id: number
  public name: string
  public phone: string
  public email: string
  public birth: string
  public cpf: string
  public city: string
  public state: string
  public cep: string
  public languages: Array<string>
  public tongues: Array<string>
  public description: string


  constructor (object) {
    this.id = object.id
    this.name = object.name
    this.phone = object.phone
    this.email = object.email
    this.birth = object.birth
    this.cpf = object.cpf
    this.city = object.city
    this.state = object.state
    this.cep = object.cep
    this.languages = object.langugages
    this.tongues = object.tongues
    this.description = object.description
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  user: User

  users = [];

  constructor(private usersInfoService:UsersInfoService) { }

  ngOnInit() {
    this.checkUsers();
   }

  checkUsers(): void {
    this.usersInfoService.getUsers()
      .then(response => {
        response.forEach((item) => {
        this.user = new User(item)
        this.user.id = this.user.id
        this.user.name = this.user.name
        this.user.phone = this.user.phone
        this.user.email = this.user.email
        this.user.birth = this.user.birth
        this.user.cpf = this.user.cpf
        this.user.city = this.user.city
        this.user.state = this.user.state
        this.user.cep = this.user.cep
        this.user.languages = this.user.languages
        this.user.tongues = this.user.tongues
        this.user.description = this.user.description
        this.users.push(this.user)
      })
      })
      .catch(error => console.log(error))
  }

}

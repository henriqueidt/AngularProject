import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  wrong = ['im working'];

  myErrors() {
    return this.wrong;
  }

  addError(error) /* ta tipando o retorno do metodo - tem que retornar uma lista de strings*/ {
    this.wrong.push(error)
    // console.log(this.wrong)

    return error
  }

}

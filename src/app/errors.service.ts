import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  wrong = [];

  myErrors() {
    return this.wrong;
  }

  updateErrors(error) {
    if (error.correct == false) {
      if (this.wrong.indexOf(error.text) === -1) {
        this.wrong.push(error.text)
      }
    } else if (this.wrong.indexOf(error.text) !== -1) {
      this.wrong.splice(this.wrong.indexOf(error.text), 1)
    }
  }

}

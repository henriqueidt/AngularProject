import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ErrorsService } from '../errors.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})

export class PersonalInfoComponent implements OnInit {

  name = '';
  phone = '';
  email= '';
  birth= '';

  @Output('test')
  personalResponse = new EventEmitter();

  constructor(private errorsService:ErrorsService) { }

  ngOnInit() {}

  reciverFeedback(receivedResponse) {
    this.errorsService.updateErrors(receivedResponse)
  }

  validateName(): void {
    const regexName = /^[a-zA-Z ]+$/;

    if (!regexName.test(this.name) || this.name.length > 50) {
      this.personalResponse.emit({
        text: "Invalid name",
        correct: false
      })
    } else {
      this.personalResponse.emit({
        text: "Invalid name",
        correct: true
      })
    }
  }

  validatePhone(): void {
    const regexPhone = /^([1-9]{1}[1-9]{1})\s([8-9]{1}[0-9]{3,4})[\/\-]([0-9]{4})$/;
    let phoneLen = this.phone.length;

    if (phoneLen == 2) {
      this.phone += ' ';
    }
    if (phoneLen === 8) {
      this.phone += '-';
    }
    if (!this.phone.match(regexPhone) || this.phone.length > 13) {
      this.personalResponse.emit({
        text: "Invalid phone",
        correct: false
      })
    } else {
      this.personalResponse.emit({
        text: "Invalid phone",
        correct: true
      })
    }
  }

  validateEmail(): void {
    const regexEmail = /^([a-z0-9]{5,})[@]([a-z]{3,}[.])([a-z]{2,3})[.]{0,1}([a-z]{0,3})$/
    if (!this.email.match(regexEmail)) {
      this.personalResponse.emit({
        text: "Invalid email",
        correct: false
      })
    } else {
      this.personalResponse.emit({
        text: "Invalid email",
        correct: true
      })
    }
  }

  validateBirth(): void {
    const regexBirth =/^([0-9]{2})[\/\-]([0-9]{2})[\/\-]([0-9]{4})$/;
    let birthLen = this.birth.length;
    let dateParts = this.birth.split('/');
    if (birthLen === 2 || birthLen === 5) {
      this.birth += '/';
    }
    if (!regexBirth.test(this.birth) || parseInt(dateParts[2]) > 2000) {
      this.personalResponse.emit({
        text: "Invalid birth",
        correct: false
      })
    } else {
      this.personalResponse.emit({
        text: "Invalid birth",
        correct: true
      })
    }
  }
}

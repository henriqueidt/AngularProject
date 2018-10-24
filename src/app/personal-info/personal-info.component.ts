import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output('teste')
  respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  feedback() {
    // console.log('Resposta para o component pai', this.respostaFamilia.emit({"nome": "Raphella", "SobreNome": "Souza"}));
  }

  validateValue(): void {
    const regexName = /^[a-zA-Z ]+$/;

    if (!regexName.test(this.name)) {
      this.respostaFamilia.emit("Erro no nome")
    }
  }

  /* ngDoCheck() {
    const regexName = /^[a-zA-Z ]+$/;
    const regexPhone = /^([1-9]{1}[1-9]{1})\s([8-9]{1}[0-9]{3,4})[\/\-]([0-9]{4})$/;
    const regexEmail = /^([a-z]{5,})[@]([a-z]{3,}[.])([a-z]{2,3})[.]{0,1}([a-z]{0,3})$/
    const regexBirth =/^([0-9]{2})[\/\-]([0-9]{2})[\/\-]([0-9]{4})$/;
    let birthLen = this.birth.length;
    let phoneLen = this.phone.length;
    if (phoneLen == 2) {
      this.phone += ' ';
      this.errorsService.addError('error')
    }
    if (phoneLen === 8) {
      this.phone += '-';
    }
  }*/

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss']
})
export class CpfComponent implements OnInit {

  cpf = '';

  @Output('cpf')
  cpfResponse = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  testCPF(strCPF)  {
    let sum, i;
    let rest;
    sum = 0;
    if (strCPF == '00000000000') {
      return false;
    }
    for (i = 1; i <= 9; i++) {
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }
    if (rest != parseInt(strCPF.substring(9, 10)) ) {
      return false;
    }
    sum = 0;
    for (i = 1; i <= 10; i++) {
      sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }
    if (rest != parseInt(strCPF.substring(10, 11) ) ) {
      return false;
    }
    return true;
  }

  validateCpf(): void {
    const regexCpf = /^[0-9]+$/;
    let cpfLen = this.cpf.length;
    if (cpfLen === 3 || cpfLen === 7) {
      this.cpf += '.';
    }
    if (cpfLen === 11) {
      this.cpf += '-';
    }
    if (this.cpf.length > 14) {
      this.cpfResponse.emit({
        text: 'Cpf too long',
        correct: false
      })
    } else {
        this.cpfResponse.emit({
          text: 'Cpf too long',
          correct: true
        })
      }
    let cleanCpf = this.cpf.replace(/[\.-]/g, '');
    if (!this.testCPF(cleanCpf) || !cleanCpf.match(regexCpf)) {
      this.cpfResponse.emit({
        text: 'Invalid cpf',
        correct: false
      })
    } else {
      this.cpfResponse.emit({
        text: 'Invalid cpf',
        correct: true
      })
    }
}

}

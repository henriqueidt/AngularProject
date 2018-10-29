import { Component, OnInit } from '@angular/core';

class Language {
  public name: string
  public speciality: string
  public show: boolean

  constructor(object) {
    this.name = object.name
    this.speciality = object.speciality
    this.show = object.show
  }
}
@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {
  languages: Language[] = [
    new Language({ name: 'html', speciality: 'knows html', show: false}),
    new Language({ name: 'css', speciality: 'knows css', show: false}),
    new Language({ name: 'javascript', speciality: 'knows js', show: false})
  ];

  tongues = [
    { id: 1, name: 'Portuguese', speciality: 'fala portugues', level: 'none'},
    { id: 2, name: 'English', speciality: 'speaks english', level: 'none'},
    { id: 3, name: 'Espanhol', speciality: 'hablas espanhol', level: 'none'},
  ];

  createLanguage: Language;

  inputLanguage: '';

  levels = ['none','beginner', 'intermediate', 'advanced'];

  constructor() {  }

  ngOnInit() {}

  newLanguage(): void {
    this.createLanguage = new Language({
      name : this.inputLanguage,
      speciality : `knows ${this.inputLanguage}`,
      show : false
    });
    this.languages.push(this.createLanguage)
  }

}

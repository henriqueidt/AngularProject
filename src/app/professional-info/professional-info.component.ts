import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {
  languages = [
    { id: 1, name: 'html', speciality: 'knows html', show: false},
    { id: 2, name: 'css', speciality: 'knows css', show: false},
    { id: 3, name: 'javascript', speciality: 'knows js', show: false}
  ];

  tongues = [
    { id: 1, name: 'Portuguese', speciality: 'fala portugues', level: 'none'},
    { id: 2, name: 'English', speciality: 'speaks english', level: 'none'},
    { id: 3, name: 'Espanhol', speciality: 'hablas espanhol', level: 'none'},
  ];

  levels = ['none','beginner', 'intermediate', 'advanced'];

  constructor() {  }

  ngOnInit() {}

}

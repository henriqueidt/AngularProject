import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  description = '';
  bad_words = ['death','kill','murder','thiago','bitch','fuck']

  @Output('description')
  descriptionResponse = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  validateDescription(): void {
    let flag = false;
    if (this.description.length > 200) {
      this.descriptionResponse.emit({
        text: "Invalid description",
        correct: false
      })
    } else {
      this.descriptionResponse.emit({
        text: "Invalid description",
        correct: true
      })
    }
    this.bad_words.forEach ((item) =>  {
      let badWord = item;
      if (this.description.toLowerCase().indexOf(badWord.toString()) != -1){
          flag = true
          this.descriptionResponse.emit({
            text: "Bad language",
            correct: false
          })
      }
    });
    if (flag == false) {
      this.descriptionResponse.emit({
        text: "Bad language",
        correct: true
      })
    }
  }
}

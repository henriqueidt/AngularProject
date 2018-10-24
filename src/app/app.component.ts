import { Component } from '@angular/core';
import { ErrorsService } from './errors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teste: string = ''

  constructor(private errorsService:ErrorsService) {  }
  title = 'angularProject';
  errors: string[] = [];

  ngOnInit() { }

  reciverFeedback(respostaFilho) {
    const error = this.errorsService.addError(respostaFilho)
    this.errors.push(error)
  }

}

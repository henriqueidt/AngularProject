import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../errors.service';
import { UsersInfoService } from '../users-info.service';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss']
})
export class FormularyComponent implements OnInit {

  test: string= ''

  constructor(private errorsService:ErrorsService, private usersInfoService:UsersInfoService) { }
  title = 'angularProject';

  ngOnInit() { }

  reciverFeedback(receivedResponse) {
    this.errorsService.updateErrors(receivedResponse)
  }

  postUser() {
    // this.usersInfoService.sendUsers()
  }
}

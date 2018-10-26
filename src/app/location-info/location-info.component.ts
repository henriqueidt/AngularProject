import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

class Location {
  public localidade: string
  public uf: string
  public logradouro: string

  constructor (object) {
    this.localidade = object.localidade
    this.uf = object.uf
    this.logradouro = object.logradouro
  }
}

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit {

  city = '';
  state = '';
  cep = '';

  location: Location

  @Output('location')
  locationResponse = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit() { }

  validateCity(): void {
    const regexCityState = /^[a-zA-Z ]+$/;

    if (this.city.length > 50 || !this.city.match(regexCityState)) {
      this.locationResponse.emit({
        text: 'Invalid city',
        correct: false
      })
    } else {
      this.locationResponse.emit({
        text: 'Invalid city',
        correct: true
      })
    }
  }

  validateState(): void {
    const regexCityState = /^[a-zA-Z ]+$/;

    if (this.state.length > 50 || !this.state.match(regexCityState)) {
      this.locationResponse.emit({
        text: 'Invalid state',
        correct: false
      })
    } else {
      this.locationResponse.emit({
        text: 'Invalid state',
        correct: true
      })
    }
  }

  validateCep(): void {
    let cepLen = this.cep.length;
    if (cepLen == 5) {
      this.cep += '-';
    }
  }

  checkCep(): void {
    this.dataService.getLocation(this.cep)
      .then(response => {
        this.location = new Location(response)
        this.city = this.location.localidade;
        this.state = this.location.uf;
      })
      .catch(error => console.log(error))
  }
}


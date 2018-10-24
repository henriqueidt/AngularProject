import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CpfComponent } from './cpf/cpf.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { ProfessionalInfoComponent } from './professional-info/professional-info.component';
import { DescriptionComponent } from './description/description.component';
import { FormsModule } from '@angular/forms';
import { ErrorsService } from './errors.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    CpfComponent,
    LocationInfoComponent,
    ProfessionalInfoComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ErrorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

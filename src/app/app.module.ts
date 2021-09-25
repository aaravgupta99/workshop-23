import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials/material.module'

import { PatientService } from './patient-info/patient-info.service';
import { PatientInfoComponent } from './patient-info/patient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [ PatientService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }

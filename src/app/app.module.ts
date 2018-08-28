import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

import { AppComponent } from './app.component';

import { Person } from './person';
import { Persons } from './persons';

import { myForm } from './my.form';


@NgModule({
  declarations: [
    AppComponent,
    Person,
    Persons,
    myForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

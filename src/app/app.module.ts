import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PersonDetailsComponent, MainPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CalcResComponent } from './calc-res/calc-res.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CalcResComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

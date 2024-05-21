import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountryTableComponent } from './pages/banderas/bandera/component/country-table/country-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

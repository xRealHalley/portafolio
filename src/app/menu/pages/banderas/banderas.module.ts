import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BanderasComponent } from './banderas.component';
import { BanderasRoutingModule } from './banderas/countries-routing.module';

@NgModule({
  declarations: [
    BanderasComponent
  ],
  imports: [
    BanderasRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [
    BanderasComponent
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';


import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BanderasComponent } from './banderas.component';
import { CountriesRoutingModule } from './banderas/countries-routing.module';
import { CountriesModule } from './banderas/countries.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BanderasComponent
  ],
  imports: [
    CommonModule,
    CountriesModule,
    CountriesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [
    BanderasComponent
  ]
})
export class BanderasModule { }

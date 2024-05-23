import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BanderasComponent } from './banderas.component';

import { SharedModule } from './shared/shared.module';
import { CountriesRoutingModule } from './banderas/countries-routing.module';
import { CountriesModule } from './banderas/countries.module';


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
  ],
})
export class BanderasModule { }

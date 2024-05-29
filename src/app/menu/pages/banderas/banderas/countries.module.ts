import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

import { SharedModule } from '../shared/shared.module';


import { CountryService } from '../../../../services/country.service';
import { BanderaPaisComponent } from './pages/bandera-pais/bandera-pais.component';
import { MapTableComponent } from './components/map-table/map-table.component';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
    BanderaPaisComponent,
    MapTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    CountryService
  ]
})


export class CountriesModule { }

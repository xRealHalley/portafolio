import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from './menu-routing.module';

import { BanderasComponent } from './pages/banderas/banderas.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { WeatherComponent } from './pages/weather/weather.component';


@NgModule({
  declarations: [
    BanderasComponent,
    CalculadoraComponent,
    InicioPageComponent,
    LayoutPageComponent,
    ListaTareasComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MenuRoutingModule
  ],
  bootstrap: [
    CalculadoraComponent
  ]
})
export class MenuModule { }

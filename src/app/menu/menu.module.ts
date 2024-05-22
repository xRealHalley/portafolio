import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from './menu-routing.module';

import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { BanderasModule } from './pages/banderas/banderas.module';
import { HistorialComponent } from './pages/calculadora/historial/historial.component';

import { CalculadoraService } from '../services/calculadora.service';




@NgModule({
  declarations: [
    CalculadoraComponent,
    InicioPageComponent,
    LayoutPageComponent,
    ListaTareasComponent,
    WeatherComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MenuRoutingModule,
    BanderasModule
  ],
  bootstrap: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class MenuModule { }

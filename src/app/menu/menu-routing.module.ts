import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { BanderasComponent } from './pages/banderas/banderas.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'banderas', component: BanderasComponent },
      { path: 'calculadora', component: CalculadoraComponent },
      { path: 'inicio', component: InicioPageComponent },
      { path: 'tareas', component: ListaTareasComponent },
      { path: 'weather', component: WeatherComponent },
      { path: '**', redirectTo: 'inicio' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Inicio', icon:'home', url: './inicio' },
    { label: 'Calculadora', icon:'calculate', url: './calculadora' },
    { label: 'Banderas', icon:'flag', url: './banderas' },
    { label: 'Lista Tareas', icon:'lists', url: './tareas' },
    { label: 'Weather', icon:'sunny', url: './weather' }

  ]
}

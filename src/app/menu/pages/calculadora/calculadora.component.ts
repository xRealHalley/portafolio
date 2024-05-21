import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent implements OnInit {


  @ViewChild('mostrarOperaciones', { static: true }) mostrarOperaciones !: ElementRef;

  constructor( private renderer : Renderer2 ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  display: string = '';
  historyList: string[] = [];

  // Función para introducir valores
  enterValue(value: string): void {
    this.display += value;
  }

  // Función para limpiar pantalla
  clear(): void {
    this.display = '';
  }

  // Función para borrar el último dígito
  deleteLastDigit(): void {
    this.display = this.display.slice(0, -1);
  }

  // Función para calcular resultado
  result(): void {
    try {
      let expression = this.display;
      let result = eval(expression);
      this.display = result.toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

  // Función
  crearHtml(operacion: string, resultado: string) {
  }



}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  location: string = 'Paris';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.loadWeatherData();
  }

  // Función cargar datos de la ciudad
  loadWeatherData(): void {
    this.weatherService.getWeather(this.location).subscribe(
      data => {
        this.weatherData = {
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed
        };
      },
      error => {
        console.error('Error al cargar los datos: ', error);
      }
    );
  }

  // Refrescar datos 
  refreshWeatherData(): void {
    this.loadWeatherData();
  }
}

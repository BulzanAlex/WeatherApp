import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  apiIconURL: string = '';
  precipitation: number | string = 0;
  humidity: number | string = 0;

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'Lisbon';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  public getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe ({
      next: (response) => {
        this.weatherData = response;

        console.log(response);
        
        this.apiIconURL = this.weatherData.current.condition.icon;
      }
    });
  }

}

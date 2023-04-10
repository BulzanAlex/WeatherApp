import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { WeatherService } from './services/weather.service';
import { WeatherData, Current } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'Porto'
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName)
    .subscribe ( {
      next: (response) => {
        this.weatherData = response;

        console.log(response);


      }
    });
  }

}

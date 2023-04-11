import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { GeolocationService } from './services/geolocation.service';
import { HttpClient } from '@angular/common/http';
import { GeolocationData } from './models/geolocation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  apiIconURL: string = '';
  precipitation: number | string = 0;
  humidity: number | string = 0;

  

  constructor(private weatherService: WeatherService,
    private http:HttpClient
    ) {

  }

  cityNamee: string | undefined;
  cityName: string = '';
  weatherData?: WeatherData;
  geolocationData?: GeolocationData;

  ngOnInit(): void {
    this.getGeolocationData();
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe ({
      next: (response) => {
        this.weatherData = response;

        console.log(response);
        
        this.apiIconURL = this.weatherData.current.condition.icon;

        
      }
    });
  }
  geoApi = '0e85cc3431d6451890efc06c99dc9c03';
  geoUrl = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.geoApi;

  private getGeolocationData() {
    this.http.get(this.geoUrl).subscribe((res:any)=>{

      this.geolocationData = res;

      this.cityNamee = this.geolocationData?.city.toString();

      console.log(res);

      if ( this.cityNamee){
      this.getWeatherData(this.cityNamee);
      };

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
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

  
// declared constructors for the weatherService and http so as to implement functions using them => getWeatherData() and getGeolocationData()
  constructor(private weatherService: WeatherService,
    private http:HttpClient) {

  }

  userLocation: string | undefined;
  cityName: string = '';

  // these get assigned the models of the json responses the APIs should return and makes it easier to call all the values returned by APIs
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

  // this function calls the function in WeatherService to pass all the headers and parameters to the API, leaves a log of the response, 
  // assigns the data from the response to weatherData and takes the icons provided by the API in function of the weather conditions to display 
  // them in the app
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

  // this function sends the url with the API key attached to the API, leaves a log of the response 
  //  and assigns the data from the response to geolocationData
  // userLocation is assigned to the response gotten from the API regarding in what city the user is
  // then the userLocation gets passed to getWeatherData function in order to display the user's current weather conditions
  private getGeolocationData() {
    this.http.get(this.geoUrl).subscribe((res:any)=>{

      this.geolocationData = res;

      this.userLocation = this.geolocationData?.city.toString();

      console.log(res);

      if ( this.userLocation){
      this.getWeatherData(this.userLocation);
      };

    });
  }

}

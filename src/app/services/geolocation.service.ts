import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  geoApi = '0e85cc3431d6451890efc06c99dc9c03';

  geoUrl = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.geoApi;

  constructor(private http:HttpClient) { }



  getGeolocationData() {
    this.http.get(this.geoUrl).subscribe((res:any)=>{

    });
  };

}
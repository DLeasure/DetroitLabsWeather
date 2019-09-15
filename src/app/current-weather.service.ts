import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  APIKey = "2b164376f29a1417f6e2dbb7b262f08d";
  constructor(private http: HttpClient) { }

  getCurrentWeather(currentPosition) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?' + currentPosition + '&APPID=' + this.APIKey + '&units=imperial');
  };

}

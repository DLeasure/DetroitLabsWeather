import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(private http: HttpClient) { }

  getUsersLatLon(currentLocation) {
    return this.http.get("http://localhost:3500/current/" + currentLocation);
    // })
  };

}

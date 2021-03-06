import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { CurrentWeatherService } from '../current-weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(private locationService: LocationService, private currentWeatherService: CurrentWeatherService) {};

  // Variables for storing weather info
  currentPosition : string;
  currentWeather : object;

  // On init - grab current coordinates and request current weather / store result
  ngOnInit() {
    this.locationService.getPosition().then(pos=> {
      this.currentPosition = ("lat=" + pos.lat + "&lon=" + pos.lng);
      this.currentWeatherService.getCurrentWeather(this.currentPosition).subscribe(resp => {
        this.currentWeather = resp;
        console.log(this.currentWeather);
      });
    });
  };

}

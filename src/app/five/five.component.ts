import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { FiveWeatherService } from '../five-weather.service';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(private locationService: LocationService, private fiveWeatherService: FiveWeatherService) {};

  currentPosition : string;
  fiveDayForecast : Array<object> = [];

  ngOnInit() {
    this.locationService.getPosition().then(pos=> {
      this.currentPosition = ("lat=" + pos.lat + "&lon=" + pos.lng);
      this.fiveWeatherService.getFiveDayWeather(this.currentPosition).subscribe(resp => {
        console.log(resp);
      });
  })};

}

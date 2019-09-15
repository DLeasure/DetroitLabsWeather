import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '../location.service';
import { FiveWeatherService } from '../five-weather.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(private locationService: LocationService, private fiveWeatherService: FiveWeatherService) {};

  // Variables for storing forecast info
  currentPosition : string;
  fiveDayForecast : any = [];

  // configure table
  displayedColumns: string[] = ['dateTime', 'temperature', 'icon'];
  dataSource = new MatTableDataSource<object>(this.fiveDayForecast);

  // create image URL
  findImgSource(code) {
    return ("http://openweathermap.org/img/wn/" + code + "@2x.png");
  }; 

  // Used for Table
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // On init - grab current coordinates and populate array of results
  ngOnInit() {
    this.locationService.getPosition().then(pos=> {
      this.currentPosition = ("lat=" + pos.lat + "&lon=" + pos.lng);
      this.fiveWeatherService.getFiveDayWeather(this.currentPosition).subscribe(resp => {
        this.fiveDayForecast = resp.list;
        console.log(this.fiveDayForecast);
      });
  })};

}

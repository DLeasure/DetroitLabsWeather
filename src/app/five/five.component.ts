import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(private locationService: LocationService) {};

  currentPosition : string;

  ngOnInit() {
    this.locationService.getPosition().then(pos=> {
    this.currentPosition = ("lat" + pos.lat + "&lon" + pos.lng);
  })};

}

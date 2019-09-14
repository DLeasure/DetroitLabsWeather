import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(private locationService: LocationService) {};

  currentPosition : string;

  ngOnInit() {
    this.locationService.getPosition().then(pos=> {
    this.currentPosition = ("lat" + pos.lat + "&lon" + pos.lng);
  })};

}

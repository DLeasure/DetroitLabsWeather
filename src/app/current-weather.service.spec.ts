import { TestBed } from '@angular/core/testing';

import { CurrentWeatherService } from './current-weather.service';

describe('CurrentWeatherService', () => {

  let currentWeatherService : CurrentWeatherService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentWeatherService = TestBed.get(CurrentWeatherService);
    expect(service).toBeTruthy();
  });
  
  it('service should return result', () => {
    const weatherTest = currentWeatherService.getCurrentWeather('lat=42.51955290000001&lon=-83.173485&');
    expect(weatherTest.coord.lat).toEqual('42.52')
  });
});

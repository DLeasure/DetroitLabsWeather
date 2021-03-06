import { TestBed } from '@angular/core/testing';

import { FiveWeatherService } from './five-weather.service';

describe('FiveWeatherService', () => {

  let fiveWeatherService : FiveWeatherService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiveWeatherService = TestBed.get(FiveWeatherService);
    expect(service).toBeTruthy();
  });

  it('service should return result', () => {
    const weatherTest = fiveWeatherService.getFiveDayWeather('lat=42.51955290000001&lon=-83.173485&');
    expect(weatherTest.city.name).toEqual('Berkley');
  });
});

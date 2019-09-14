import { TestBed } from '@angular/core/testing';

import { FiveWeatherService } from './five-weather.service';

describe('FiveWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiveWeatherService = TestBed.get(FiveWeatherService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ThemovieService } from './themovie.service';

describe('ThemovieService', () => {
  let service: ThemovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

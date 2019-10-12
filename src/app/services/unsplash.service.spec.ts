import { TestBed } from '@angular/core/testing';
import { UnsplashService } from './unsplash.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UnsplashService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('unsplashservice should be created', () => {
    const service: UnsplashService = TestBed.get(UnsplashService);
    expect(service).toBeTruthy();
  });
});

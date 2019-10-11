import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Collections } from '../enums/collections.enum';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(
    private http: HttpClient
  ) { }

  getMockUnsplashPhotosByQuery(query){
    return this.http.get("./assets/mocks/" + query + ".json");
  }

  getUnsplashPhotosByCollection(query){
    return this.http.get(environment.unsplash.baseURL + "collections/" + Collections[query] + "/photos?client_id=" + environment.unsplash.apiKey);
  }
}

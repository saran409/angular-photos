import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface unsplashPhotos{
  urls:{
    regular:string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }


 public getPhotos(){
   return this.http.get<unsplashPhotos>("https://api.unsplash.com/photos/random", {
      headers:{
        Authorization: 'Client-ID 4_h9dWgtwUVDRYCD79z2MzpAaRTdsT59MH9LbivT7k4'
        
      }
    });
  }
}

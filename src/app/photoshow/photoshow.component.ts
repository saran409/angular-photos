import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent {

  url='';

constructor(private get:PhotosService){
  this.get.getPhotos().subscribe(response=>{
    
  
    console.log(response.urls.regular);

  

})}



onClick(){
  this.get.getPhotos().subscribe((response)=>{
    
this.url=response.urls.regular;
console.log(this.url);

  })
}


}

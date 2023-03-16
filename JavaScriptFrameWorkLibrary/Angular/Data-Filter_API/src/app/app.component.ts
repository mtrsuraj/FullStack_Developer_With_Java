import { Component } from '@angular/core';
import {ServicesfreeapiService} from './servicesfreeapi.service';
import{Albums} from './classes/albums'
import{Photos} from './classes/photos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datafilter';
  constructor(private _servicesfreeapi:ServicesfreeapiService){
    // this._servicesfreeapi.getAlbums().subscribe(data =>{
    //   console.log(data);
    // })

  }

  listAlbums!:Albums[];
  AlbumSelected!:number;
  listPhotos!:Photos[];

  ngOnInit(){
    this._servicesfreeapi.getAlbums().subscribe(data=>{
      this.listAlbums=data;
    })
  }
  onAlbumSelected(selectedAlbumId:any):void{
    this._servicesfreeapi.getPhotosForSelectedAlbum(selectedAlbumId).subscribe(datas=>{
      this.listPhotos=datas;
    })
  }

}

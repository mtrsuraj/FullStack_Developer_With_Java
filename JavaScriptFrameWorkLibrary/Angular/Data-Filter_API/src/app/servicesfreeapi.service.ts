import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesfreeapiService {

  constructor(private httpclient:HttpClient) { }
  url:string='https://jsonplaceholder.typicode.com/albums'
  getAlbums(): Observable<any> {
    return this.httpclient.get(this.url)

  }
  urls:string='https://jsonplaceholder.typicode.com/photos/?albumid=4'

  getPhotosForSelectedAlbum(selectedAlbumId:string):Observable<any>{
    let params1 = new HttpParams().set('albumId', selectedAlbumId)
    return this.httpclient.get(this.urls, {params:params1});
  }

}

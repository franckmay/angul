import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/domaine/Image';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  constructor(private http: HttpClient) { }


  getImages() {
  return this.http.get<any>('assets/showcase/data/photos.json')
    .toPromise()
    .then(res => <Image[]>res.data)
    .then(data => { return data; });
  }
}
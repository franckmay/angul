import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NoeudService {
  constructor(private http: HttpClient) { }

  getFilesystem() {
  return this.http.get<any>('assets/fichiers.json')
    .toPromise()
    .then(res => <TreeNode[]>res.data);
  }

  getLazyFilesystem() {
  return this.http.get<any>('assets/repertoire2.json')
    .toPromise()
    .then(res => <TreeNode[]>res.data);
  }
}
import { Component, OnInit } from '@angular/core';import {TreeNode} from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';
import { NoeudService } from 'src/app/services/noeud.service';

@Component({
  selector: 'app-t-t02',
  templateUrl: './t-t02.component.html',
  styleUrls: ['./t-t02.component.css']
})
export class TT02Component implements OnInit {

  files: TreeNode[]= [];

  cols: any[] = [];

  constructor(private noeudservice: NoeudService) { }

  ngOnInit() {
      this.noeudservice.getFilesystem().then(files => this.files = files);

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
  }
}
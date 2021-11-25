import { Component, OnInit } from '@angular/core';import {TreeNode} from 'primeng/api';
import { NoeudService } from 'src/app/services/noeud.service';
@Component({
  selector: 'app-t-t03',
  templateUrl: './t-t03.component.html',
  styleUrls: ['./t-t03.component.css']
})
export class TT03Component implements OnInit {

  files: TreeNode[] = [];

  cols: any[] = [];

  selectedColumns: any[] = [];

  constructor(private nodeService: NoeudService) { }

  ngOnInit() {
      this.nodeService.getLazyFilesystem().then(files => this.files = files);

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];

      this.selectedColumns = this.cols;
  }
}
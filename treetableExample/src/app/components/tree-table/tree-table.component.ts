import { Component, OnInit } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { NoeudService } from 'src/app/services/noeud.service';


@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

 
  title = 'treetableExample';
  files: TreeNode[] = [];
  cols: any[] = [];

  constructor(private noeud_service: NoeudService) { }

  ngOnInit() {
      this.noeud_service.getFilesystem().then(files => this.files = files);

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
  }
}

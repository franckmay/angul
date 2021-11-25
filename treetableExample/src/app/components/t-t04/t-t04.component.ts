import { Component, OnInit } from '@angular/core';import {TreeNode} from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';
import { NoeudService } from 'src/app/services/noeud.service';

@Component({
  selector: 'app-t-t04',
  templateUrl: './t-t04.component.html',
  styleUrls: ['./t-t04.component.css']
})
export class TT04Component implements OnInit {

  files: TreeNode[] = [];

  cols: any[] = [];

  constructor(private nodeService: NoeudService) { }

  ngOnInit() {
      this.nodeService.getFilesystem().then(files => this.files = files);

      this.cols = [
          { field: 'name', header: 'Nom' },
          { field: 'size', header: 'Taille' },
          { field: 'type', header: 'Type' }
      ];
  }
}
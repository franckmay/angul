import { Component } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { NoeudService } from './services/noeud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

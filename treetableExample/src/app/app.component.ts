import { Component } from '@angular/core'; import { MenuItem, MessageService } from 'primeng/api';
import { PhotoserviceService } from './services/photoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dockBasicItems: MenuItem[] = [];
  images: any[] = [];

  ngOnInit() {
    this.dockBasicItems = [
      {
        label: 'Finder',
        icon: "assets/finder.svg"
      },
      {
        label: 'App Store',
        icon: "assets/appstore.svg"
      },
      {
        label: 'Trash',
        icon: "assets/terminal.svg"
      },
      {
        label: 'Photos',
        icon: "assets/photos.svg"
      },
      {
        label: 'Trash',
        icon: "assets/trash.png"
      }

    ];

  }

  choix(chemin: string): string {
    let rep: string = '';
    switch (chemin) {
      case 'App Store':
        rep = 'tt02';
        break;
      case 'Photos':
        rep = 'tt03';
        break;
      case 'Trash':
        rep = 'tt04';
        break;

      default:
        rep = 'trtable';
        break;
    }
    return rep;
  }

}
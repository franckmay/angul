import { Component, OnInit } from '@angular/core';
import { Employe} from '../employe'

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employe : Employe = {
    id: 0,
    nom: 'Ned Stark'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

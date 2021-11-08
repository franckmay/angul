import { Component, OnInit } from '@angular/core';
import { Employe} from '../employe'
import { FormsModule } from '@angular/forms';
import { EMPLOYES } from '../mock-employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes = EMPLOYES;

  constructor() { }

  ngOnInit(): void {
  }

}

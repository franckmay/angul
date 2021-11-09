import { Component, OnInit, Input } from '@angular/core';
import { Employe } from '../employe';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})

export class EmployeDetailComponent implements OnInit {

@Input()employe? : Employe;

  constructor() { }

  ngOnInit(): void {
  }

}

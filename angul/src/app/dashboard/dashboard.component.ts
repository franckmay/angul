import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employes: Employe[] = [];

  constructor(private empService : EmployeService) { }

  ngOnInit(): void {
    this.getEmployes();
  }

  getEmployes(): void {
    this.empService.getEmployes().subscribe(employes => this.employes = employes.slice(1,5));
  }

}

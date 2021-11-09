import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe'
import { FormsModule } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes : Employe[] = [];

    
    constructor(private empService: EmployeService) { }

  ngOnInit() {
    this.getEmployes();

  }

  selectedEmploye?: Employe;
  onSelect(employe: Employe): void {
    this.selectedEmploye = employe;
  }

  getEmployes(): void {
    this.employes = this.empService.getEmployes();
  }

}

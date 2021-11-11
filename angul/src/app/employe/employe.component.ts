import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe'
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes: Employe[] = [];
  selectedEmploye?: Employe;



  constructor(private empService: EmployeService) { }

  ngOnInit() {
    this.getEmployes();

  }

  getEmployes(): void {
    this.empService.getEmployes()
    .subscribe(employes => this.employes = employes);
  }
  add(nom : string): void {
    nom = nom.trim();
    if (!nom) {
      return;
    }
    this.empService.addEmploye({nom} as Employe)
    .subscribe(employe => {this.employes.push(employe);})
  }

  delete(employe: Employe): void { 
    this.employes = this.employes.filter(h => h !==employe);
    this.empService.deleteEmploye(employe.id).subscribe();
   }

}

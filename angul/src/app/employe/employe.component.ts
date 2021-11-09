import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe'
import { FormsModule } from '@angular/forms';
import { EmployeService } from '../employe.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes: Employe[] = [];
  selectedEmploye?: Employe;



  constructor(private empService: EmployeService, private mesService: MessageService) { }

  ngOnInit() {
    this.getEmployes();

  }

  onSelect(employe: Employe): void {
    this.selectedEmploye = employe;
    this.mesService.add(`EmployeComponent : employé selectionné id=${employe.id}`);
  }

  getEmployes(): void {
    this.empService.getEmployes().subscribe(employes => this.employes = employes);
  }

}

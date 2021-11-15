import { Component, OnInit } from '@angular/core';
import { EmployeC } from '../employe-classe';
import { EmployeService } from '../employe.service';
import { Employe } from '../employe';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {
  employes: Employe[] = [];

  constructor(private empService: EmployeService) { }

  ngOnInit(): void {
    this.getCompetences();
  }


  competences : string [] = [];

// competences = ['comptabilité', 'developpement logiciel',
//     'administration système', 'droit',
//     'secretariat', 'sécurité',
//     'entretient', 'gestion des ressources humaines'];

  model = new EmployeC(22, 'Njinga robbert', this.competences[0], 'eddard stark');

  submitted = false;
  onSubmit(nom : string, competence = 'polyvalent', superieur = 'PDG') { 
    this.submitted = true;
    nom = nom.trim();
    competence = competence.trim();
    superieur = superieur.trim();
    if (!nom) {
      return;
    }
    this.empService.addEmploye({nom,competence,superieur} as Employe)
    .subscribe(employe => {this.employes.push(employe);})
   }

  newEmp() {
    this.model = new EmployeC(23, '', '');
  }

  getCompetences() :void { 

    this.empService.getCompetences()
    .subscribe(competences => this.competences = competences);
  }


  add(nom : string, competence = 'polyvalent', superieur = 'PDG') : void {
    nom = nom.trim();
    competence = competence.trim();
    superieur = superieur.trim();
    if (!nom) {
      return;
    }
    this.empService.addEmploye({nom,competence,superieur} as Employe)
    .subscribe(employe => {this.employes.push(employe);})
  }

}

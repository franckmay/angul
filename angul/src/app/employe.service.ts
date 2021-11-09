import { Injectable } from '@angular/core';
import { Employe } from './employe';
import { EMPLOYES } from './mock-employe';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor() { }

  getEmployes(): Employe[] {
    return EMPLOYES;
  }
}

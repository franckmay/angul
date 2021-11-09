import { Injectable } from '@angular/core';
import { Employe } from './employe';
import { EMPLOYES } from './mock-employe';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private mesService : MessageService) { }

  getEmployes(): Observable<Employe[]> {
    const employes = of (EMPLOYES);
    this.mesService.add('Messages services : employes recupérés');
    return employes;
  }

}

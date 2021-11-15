import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
  createDb() {

    const employes = [
      { id: 1, nom: 'brandon stark', competence: 'comptabilité', superieur: 'GRH' },
      { id: 2, nom: 'rickon stark' },
      { id: 3, nom: 'john stark' },
      { id: 4, nom: 'dickon stark' },
      { id: 5, nom: 'edard stark' },
      { id: 6, nom: 'sanza stark' },
      { id: 7, nom: 'arya stark' },
      { id: 8, nom: 'cateline stark' },
      { id: 9, nom: 'theon stark' },
      { id: 10, nom: 'egrite stark' },
      { id: 11, nom: 'odor stark' },
      { id: 12, nom: 'brandon stark' },
      { id: 13, nom: 'Bombasto' },
      { id: 14, nom: 'Celeritas' },
      { id: 15, nom: 'Magneta' },
      { id: 16, nom: 'RubberMan' },
      { id: 17, nom: 'Dynama' },
      { id: 18, nom: 'Dr IQ' },
      { id: 19, nom: 'Magma' },
      { id: 20, nom: 'Tornado' }
    ];

    const competences = ['comptabilité', 'developpement logiciel',
    'administration système', 'droit',
    'secretariat', 'sécurité',
    'entretient', 'gestion des ressources humaines'];
    
    return {employes, competences};
  }

 // Remplace la méthode genId pour s'assurer qu'un employé ait toujours un identifiant.
  // Si le tableau employes est vide,
  // la méthode ci-dessous renvoie le nombre initial (1).
  // si le tableau employes n'est pas vide, la méthode ci-dessous renvoie le plus haut
  // employe id + 1.

  genId(employes: Employe[]): number {

    return employes.length> 0 ? Math.max(...employes.map(emp => emp.id)) + 1 : 1;
  }
}

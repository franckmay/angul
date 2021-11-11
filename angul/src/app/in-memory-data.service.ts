import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
  createDb() {

    const employes = [
      { id: 1, nom: 'brandon stark' },
      { id: 2, nom: 'rickon stark' },
      { id: 3, nom: 'john stark' },
      { id: 4, nom: 'dickon stark' },
      { id: 5, nom: 'edard stark' },
      { id: 6, nom: 'sanza stark' },
      { id: 7, nom: 'arya stark' },
      { id: 8, nom: 'cateline stark' },
      { id: 9, nom: 'theon stark' },
      { id: 10, nom: 'egrite stark' },
      { id: 11, nom: 'odor stark' }
    ];
    const lemp = [
      { id: 1, nom: 'brandon stark' },
      { id: 2, nom: 'lyanna stark' },
      { id: 3, nom: 'eddard stark' },
      { id: 4, nom: 'dickon stark' },
      { id: 5, nom: 'rob stark' },
      { id: 6, nom: 'john stark' },
      { id: 7, nom: 'sanza stark' },
      { id: 8, nom: 'arya stark' },
      { id: 9, nom: 'theon stark' },
      { id: 10, nom: 'egrite stark' },
      { id: 11, nom: 'odor stark' },
      { id: 12, nom: 'brandon stark' },
      
      
    ];
    return {lemp};
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
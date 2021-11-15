import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounce,
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-employe-search',
  templateUrl: './employe-search.component.html',
  styleUrls: ['./employe-search.component.css']
})
export class EmployeSearchComponent implements OnInit {
  employes$!: Observable<Employe[]>;
  private searchTerms = new Subject<string>();


  constructor(private empService: EmployeService) { }

  ngOnInit(): void {
    this.employes$ = this.searchTerms
      .pipe(
        // attendre 300ms apres chaque keystroke avant de considéré le terme requests
        debounceTime(300),

        // ignorer le nouveau terme si il est identique au précédent
        distinctUntilChanged(),

        // basculer sur le nouvel observable de recherche chaque fois que le terme change
        switchMap((term: string) => this.empService.searchEmployees(term)),

      );
  }

  // envoyer le terme recherché dans un Observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

}

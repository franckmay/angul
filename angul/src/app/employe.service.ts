import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Employe } from './employe';
import { EMPLOYES } from './mock-employe';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private employeUrl = 'api/lemp'; // url to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private mesService: MessageService,
    private http: HttpClient) { }


  /** get employes depuis le server */
  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.employeUrl)
      .pipe(
        tap(_ => this.log('employes recupérés')),
        catchError(this.handleError<Employe[]>('getEmployes', []))
      );
  }

  /** GET employe par id. sera 404 si id est introuvable */
  getEmploye(id: number): Observable<Employe> {
    const url = `${this.employeUrl}/${id}`;
    return this.http.get<Employe>(url).pipe(
      tap(_ => this.log(`employes recupérés id = ${id}`)),
      catchError(this.handleError<Employe>(`getEmploye id=${id}`))
    );
  }
  /** POST :  ajouter un nouvel employe sur le server */
  addEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.employeUrl, employe, this.httpOptions)
      .pipe(
        tap((newEmploye: Employe) => this.log(` emmployé ajouté w/ id = ${newEmploye.id}`)),
        catchError(this.handleError<Employe>('addEmploye'))
      );
  }

  /** PUT: update un employe sur le server */
  updateEmployee(employe: Employe): Observable<any> {
    return this.http.put(this.employeUrl, employe, this.httpOptions).pipe(
      tap(_ => this.log(`employé mis a jour id=${employe.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }


  /** delete: supprimer un employé sur le server */
  deleteEmploye(id: number): Observable<Employe> {
    const url = `${this.employeUrl}/${id}`;
    return this.http.delete<Employe>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`delete employe id = ${id}`)),

        catchError(this.handleError<Employe>('deleteEmploye')));
  }

  /** GET: recupérer les employés dont les noms correspondent avec les termes de recherche */

  //log un message employeService avec le MessageService
  private log(message: string) {
    this.mesService.add(`EmployeService: ${message}`);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} a échoué : ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

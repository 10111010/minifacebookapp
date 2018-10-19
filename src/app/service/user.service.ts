import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { User } from '../interfaces/User';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
  return this.http.get<User[]>(this.URL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    
  }
  get(id: number): Observable<any> {
    return this.http.get(this.URL + '/user/' + id +'/show');
  }

  ajouteruser(id : number): Observable<any>{
 	 return this.http.get(this.URL + '/' + id +'/ajouter');
  }
 supprimeruser(id : number): Observable<any>{
 	 return this.http.get(this.URL + '/' + id +'/supprimer');
  }

  ajouteramis(user : User): Observable<any>{
   return this.http.post(this.URL + '/ajouteramis', user).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );;
  }

private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  }


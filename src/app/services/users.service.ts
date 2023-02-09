import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(() => error.message);
  }
}

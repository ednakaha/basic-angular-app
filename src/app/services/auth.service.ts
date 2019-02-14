import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { throwError, of, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged: BehaviorSubject<boolean>;

  constructor() {
    this._isLogged = new BehaviorSubject<boolean>(false);

  }
  Login(email: string, password: string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of('abcdefgh').pipe(
        map(res => {
          this.setToken(res);
          this._isLogged.next(true);
          return res;
        })
      );
    } else {
      return throwError('user or password are incorrect');
    }
  }

  private setToken(t: string) {
    window.localStorage.setItem(environment.tokenKey, t)
  }

  private getToken() {
    return window.localStorage.getItem(environment.tokenKey)
  }

  logOut() {
    this._isLogged.next(false);
    this.deleteToken();
  }

  private deleteToken() {
    window.localStorage.removeItem(environment.tokenKey);
  }

  isLogged(): Observable<boolean> {
    return this._isLogged;
    // return of(this.getToken() != null);
  }

}

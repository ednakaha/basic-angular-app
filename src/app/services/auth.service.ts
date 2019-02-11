import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { throwError, of, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  Login(email: string, password: string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of('abcdefgh').pipe(
        map(res => {
          this.setToken(res);
          return res;
        })
      );
    } else {
      return throwError('user or password are incorrect');
    }
  }

  setToken(t: string) {
    window.localStorage.setItem(environment.tokenKey, t)
  }

  getToken() {
   return  window.localStorage.getItem(environment.tokenKey)
  }

  isLogged(): boolean {
    return this.getToken() != null;
  }

}

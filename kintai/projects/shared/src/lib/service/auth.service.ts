import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { AuthRepository } from '../infra/authRepository';
import { map, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;

  constructor(private authRepository: AuthRepository) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  login(systemId: string, email: string, password: string) {
    return this.authRepository
      .login(systemId, email, password)
      .then(this.postLogin);
  }

  adminlogin(systemId: string, email: string, password: string) {
    return this.authRepository
      .adminlogin(systemId, email, password)
      .then(this.postLogin);
  }

  masterlogin(email: string, password: string) {
    return this.authRepository
      .masterlogin(email, password)
      .then(this.postLogin);
  }

  refresh() {
    return this.authRepository.refresh().then(this.postLogin);
  }

  private postLogin(result: any) {
    if (result && result.token) {
      window.sessionStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  isAuthenticated$(): Observable<boolean> {
    const token = window.sessionStorage.getItem('token');
    if (token === null) {
      this.loggedIn.next(false);
      return of(false);
    }
    const decoded = jwtDecode(token) as any;
    const duration = decoded.exp - decoded.iat;
    return of(token).pipe(
      mergeMap(result => {
        let now = new Date().getTime() / 1000;
        if (now > decoded.iat + duration/2) {
          return this.refresh();
        }
        return of(true);
      }),
      map(result => {
        this.loggedIn.next(result);
        return true;
      }),
      catchError(error => {
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }

  logout() {
    this.authRepository.logout();
    window.sessionStorage.removeItem('token');
  }

  getCachedAccessToken() {
    return window.sessionStorage.getItem('token');
  }

  async acquireToken() {}
}

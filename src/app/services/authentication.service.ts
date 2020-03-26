import { Injectable } from '@angular/core';
import {Authentication} from '../models/Authentication';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static token: Authentication = new Authentication('');

  constructor(private http: HttpClient) {

  }

  getKoment
  vratLogin(email: string, password: string) {
    return this.http.post<Authentication>('http://85.160.64.233:3000/session/login', {email, password});
  }
  vratRegister(username: string, email: string, password: string, passMatch: string) {
    return this.http.post<Authentication>('http://85.160.64.233:3000/session/register', {username, email, password, passMatch});
  }

  ziskejToken(token: Authentication) {
    AuthenticationService.token = token;
  }

  smazToken() {
    const headers = new HttpHeaders().set('User-Token', AuthenticationService.token.access_token);
    return this.http.delete<Authentication>('http://85.160.64.233:3000/session/logout', {headers});
  }
}

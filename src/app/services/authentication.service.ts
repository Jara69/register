import { Injectable } from '@angular/core';
import {Authentication} from '../models/Authentication';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '@angular/compiler';
import {stringify} from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public static token: Authentication = new Authentication('');

  constructor(private http: HttpClient) {
    }


    getLogin(email: string, password: string) {
    return this.http.post<Authentication>('http://85.160.64.233:3000/session/login', {email, password});
  }
  getRegister(username: string, email: string, password: string, pswConfirm: string) {
    return this.http.post<Authentication>('http://85.160.64.233:3000/session/register', {username, email, password, pswConfirm});
  }

  ziskejToken(token: Authentication) {
    AuthenticationService.token = token;
  }


  smazToken() {
    const headers = new HttpHeaders().set('User-Token', AuthenticationService.token.access_token);
    return this.http.delete<Authentication>('http://85.160.64.233:3000/session/logout', {headers});
  }
}

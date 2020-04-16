import { Injectable } from '@angular/core';
import {UserModel} from '../models/User.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {GetPagee} from '../GetPagee';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUzivatelID() {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);
    return this.http.get<GetPagee>('http://85.160.64.233:3000/users', {headers});
  }

  getUserWithId(id: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);
    return this.http.get<UserModel>('http://85.160.64.233:3000/user/' + id, {headers});
  }
  getPage(page: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    return this.http.get<UserModel>('http://85.160.64.233:3000/users/?page=' + page, {headers});
  }

  constructor(private http: HttpClient) { }
}

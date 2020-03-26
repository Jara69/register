import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PokecModel} from '../models/pokec.model';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PokecService {
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:variable-name
  getPokec(body: string, user_id: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.post<PokecModel>('http://85.160.64.233:3000/comments', {body, user_id}, {headers});
  }
  getPokeci(id: number ) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.get('http://85.160.64.233:3000/comments/?user_id=' + id, {headers});
  }
}

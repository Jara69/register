import {Authentication} from './Authentication';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';

export class UserModel {
  // tslint:disable-next-line:variable-name
  constructor(public id: number, public username: string, public email: string, public page_count: number, private http: HttpClient) {
  }

  getPage(page: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    return this.http.get<UserModel>('http://85.160.64.233:3000/users/?page=' + page, {headers});
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import Key from '../Token';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/User.model';
import {Authentication} from '../models/Authentication';
import {GetPagee} from '../getPagee';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  public username = '';
  public users = [];
  public id = GetPagee;
  public email = '';
  public url = 'http://85.160.64.233:3000/user';
  public url2 = 'http://85.160.64.233:3000/session/logout';
  public temparray = [];
  public 'data' ;
  // tslint:disable-next-line:variable-name
  private page_count: number;


  constructor(private http: HttpClient, private router: Router, private http2: HttpClient, private user: UserService, private authentication: AuthenticationService) {


    this.user.getUzivatelID().subscribe(
      (data: GetPagee) => {
        console.log(data);
        this.users = data['users'];
        console.log(this.users);
      }, (error) => {
      }
    );
  }

  clickProfile(id: number) {
    this.router.navigate(['/kmnts'], {queryParams: {id}});
  }

  get pageCount(): IterableIterator<number> {
    return new Array(this.page_count).keys();
  }

  loadPage(page: number) {
    this.user.getPage(page).subscribe(
      (data: UserModel) => {
        this.users = data['users'];
        this.page_count = data.page_count + 1;
        console.log(this.users);
      }, (error) => {

      }
    );
    console.log(page);
  }

  ngOnInit() {
  }

}

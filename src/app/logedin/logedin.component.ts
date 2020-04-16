import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import Key from '../Token';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-logedin',
  templateUrl: './logedin.component.html',
  styleUrls: ['./logedin.component.scss']
})
export class LogedinComponent implements OnInit {
  public url3 = 'http://85.160.64.233:3000/session/logout';


  constructor(private http: HttpClient, private router: Router, private http2: HttpClient, private authentication: AuthenticationService) { }

  runLogOut() {
    const headers = new HttpHeaders().set('User-Token', Key.access);

    this.authentication
      .smazToken()
      .subscribe(
        (data: any) => {
          AuthenticationService.token.access_token = "";
          console.log(Key.access);
        }, (error) => {
        }
      );
  }
  ngOnInit() {
    if (localStorage.getItem('access-token')) {
      console.log('Hello token');
      AuthenticationService.token.access_token = (localStorage.getItem('access-token'));
      this.router.navigate(['/loggedin']);

    } else {
      console.log('Cant see you token');

    }
  }

}

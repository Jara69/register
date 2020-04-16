import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Authentication} from '../models/Authentication';
import {AuthenticationService} from '../services/authentication.service';
import Key from '../Token';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public url = ' http://85.160.64.233:3000/session/login';
  public email = '';
  public password = '';
  public error = false;

  constructor(private http: HttpClient, private router: Router, private authentication: AuthenticationService, token: AuthenticationService) {}

  loginClick() {
    this.authentication.getLogin(this.email, this.password).subscribe(
      (data: Authentication) => {
        this.authentication.ziskejToken(data);
        localStorage.setItem('access-token', AuthenticationService.token.access_token);
        console.log(data);
        this.router.navigate(['/userInfo']);
      }, (error) => {

      }
    );
  }
  ngOnInit() {

    if (localStorage.getItem('access-token')) {
      AuthenticationService.token.access_token = localStorage.getItem('access-token');
      this.router.navigate(['/loggedin']);
    } else {
      this.router.navigate(['/login']);
    }
    }
  }


import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import Key from '../Token';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public url = ' http://85.160.64.233:3000/session/login';
  public email = '';
  public password2 = '';
  public error = false;

  loginClick() {
    this.http
      .post(this.url, {email: this.email, password: this.password2})
      .subscribe(
        (data: any) => {
          Key.access = data.access_token;
          console.log(Key.access);
          this.router.navigate(['/logedin']);
        }, (error) => {
          this.error = true;
        }
      );
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}

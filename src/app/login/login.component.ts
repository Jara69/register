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
  private url = ' http://85.160.64.233:3000/session/login';
  private email = '';
  private password2 = '';
  private error = false;

  loginClick() {
    this.http
      .post(this.url, {email: this.email, password: this.password2})
      .subscribe(
        (data: any) => {
          Key.access = data.access_token;
          console.log(Key.access);

          this.router.navigate(['/loggedin']);

        }, (error) => {
          this.error = true;
        }
      );
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}

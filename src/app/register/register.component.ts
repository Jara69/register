import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public username = '';
  public password = '';
  public email = '';
  public pswConfirm = '';
  public error = false;
  public url = 'http://85.160.64.233:3000/session/register';

  constructor(private http: HttpClient, private router: Router,  private authentication: AuthenticationService) {}


  registerClick() {
    console.log('More ja funguju');
    if (this.password === this.pswConfirm) {
      this.authentication.getRegister(this.username, this.email, this.password, this.pswConfirm)
        .subscribe(
          (data: any) => {
            this.router.navigate(['login']);
          }, (error) => {
            this.error = true;
          }
        );
    } else {
      this.error = true;
    }
  }
  ngOnInit() {
  }

}

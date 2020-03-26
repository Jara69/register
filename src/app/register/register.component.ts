import { Component, OnInit } from '@angular/core';
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
  public pswconfirm = '';
  public error = false;
  public registerUrl = ' http://85.160.64.233:3000/session/register';



  registerClick() {
    if (this.password === this.pswconfirm) {
      this.http
        .post(this.registerUrl, {username: this.username, email: this.email, password: this.password, pswconfirm: this.pswconfirm})
        .subscribe(
          (data: any) => {
            this.router.navigate(['/home']);
          }, (error) => {
            this.error = true;
          }
        );
    } else {
      this.error = true;
    }
  }
  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

}

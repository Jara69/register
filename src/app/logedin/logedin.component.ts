import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import Key from '../Token';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logedin',
  templateUrl: './logedin.component.html',
  styleUrls: ['./logedin.component.scss']
})
export class LogedinComponent implements OnInit {
  private url3 = 'http://85.160.64.233:3000/session/logout';

  runLogOut() {
    const headers = new HttpHeaders().set('User-Token', Key.access);

    this.http2
      .delete(this.url3, {headers})
      .subscribe(
        (data: any) => {
          Key.access = '';
          console.log(Key.access);
        }, (error) => {
        }
      );
  }
  constructor(private http: HttpClient, private router: Router, private http2: HttpClient) { }

  ngOnInit() {
  }

}

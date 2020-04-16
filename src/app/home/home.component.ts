import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    {
      if (localStorage.getItem('access-token')) {
        console.log('Hello token');
        AuthenticationService.token.access_token = (localStorage.getItem('access-token'));
        this.router.navigate(['/loggedin']);

      } else {
        console.log('Cant see you token');

      }
    }
  }
}

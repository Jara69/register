import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/User.model';
import {PokecService} from '../services/pokec.service';
import {PokecModel} from '../models/pokec.model';
import {PaginationService} from '../services/pagination.service';
import {GetPagee} from '../getPagee';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-koment',
  templateUrl: './koment.component.html',
  styleUrls: ['./koment.component.scss']
})
export class KomentComponent implements OnInit {
  public text: string;
  public delete = false;
  public body: string;
  public username: string;
  public diskuse = [];
  public userscomments: string;
  // tslint:disable-next-line:variable-name
  public user_id: number;
  public id: number;
  public user: UserModel;
  public text2 = PokecService;
  public data: Array<any>;
  public totalRecords: string;
  // tslint:disable-next-line:variable-name
  public page_count: number;
  public users: [];

  constructor(private activatedRoute: ActivatedRoute, private profile: UserService, private koment: PokecService, private pagination: PaginationService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.profile.getUserWithId(i.id).subscribe(user => {
        this.user = user;
        console.log(user);
        console.log(this.user);
        this.koment.getPokeci(this.user.id).subscribe((data: PokecModel) => {
          this.diskuse = data['comments'];
          console.log(this.diskuse);
        });
      });
    });

    if (localStorage.getItem('access-token')) {
      console.log('Hello token');
      AuthenticationService.token.access_token = (localStorage.getItem('access-token'));
      this.router.navigate(['/profile']);

    } else {
      console.log('Cant see you token');

    }
  }

  sendComment() {
    console.log('working')
    this.koment.getPokec(this.text, this.user.id).subscribe((data: PokecModel) => {
      this.delete = true;
      this.body = data.body;
      this.user_id = data.user_id;
      this.username = data.author_id.username;
      this.id = data.id;
      console.log(data);
    });
  }

  get pageCount(): IterableIterator<number> {
    return new Array(this.page_count).keys();
  }

  loadPage(page: number) {
    this.koment.getPage(page, this.user.id).subscribe(
      (data: UserModel) => {
        this.diskuse = data['comments'];
        this.page_count = data.page_count + 1;

      }, (error) => {

      }
    );
    console.log(page);
  }

}

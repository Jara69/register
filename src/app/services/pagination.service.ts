import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'http://85.160.64.233:3000/comments';
    return this.http.get<any>(url);
  }
}

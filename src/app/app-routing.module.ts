import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserinfoComponent} from './userinfo/userinfo.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent,},
  {path: 'login', component: LoginComponent},
  {path: 'logged', component: UserinfoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userinfo', component: UserinfoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

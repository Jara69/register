import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserinfoComponent} from './userinfo/userinfo.component';
import {HomeComponent} from './home/home.component';
import {KomentComponent} from './koment/koment.component';
import {LogedinComponent} from './logedin/logedin.component';



const routes: Routes = [
  {path: 'register', component: RegisterComponent,},
  {path: 'login', component: LoginComponent},
  {path: 'loggedIn', component: LogedinComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userInfo', component: UserinfoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'kmnts', component: KomentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

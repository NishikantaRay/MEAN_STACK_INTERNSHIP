import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {UpdateFormComponent} from './update-form/update-form.component';
import {DashboardComponent} from  './dashboard/dashboard.component';
import {ErrorComponent} from './error/error.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'contactform', component: ContactFormComponent,canActivate:[AuthGuardService] },
      { path: 'updateform/:id', component: UpdateFormComponent ,canActivate:[AuthGuardService]},
      { path: 'home', component: DashboardComponent,canActivate:[AuthGuardService] },
      { path: 'error', component: ErrorComponent },
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
      { path: '**', redirectTo: 'error' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

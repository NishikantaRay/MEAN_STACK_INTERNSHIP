import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {UpdateFormComponent} from './update-form/update-form.component';
import {DashboardComponent} from  './dashboard/dashboard.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'contactform', component: ContactFormComponent },
      { path: 'updateform/:id', component: UpdateFormComponent },
      { path: 'home', component: DashboardComponent },
      { path: 'error', component: ErrorComponent },
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
      { path: '**', redirectTo: 'error' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

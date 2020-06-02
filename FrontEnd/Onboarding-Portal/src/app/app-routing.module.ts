import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { OnboardeeComponent } from './onboardee/onboardee.component';
import { ViewOnboardeeComponent } from './view-onboardee/view-onboardee.component';
import { EditOnboardeeComponent } from './edit-onboardee/edit-onboardee.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'home/:name', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'onboardee', component: OnboardeeComponent },
  { path: 'view/:id', component: ViewOnboardeeComponent },
  { path: 'edit/:id', component: EditOnboardeeComponent },

  // <--------- Place every route above it --------->
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

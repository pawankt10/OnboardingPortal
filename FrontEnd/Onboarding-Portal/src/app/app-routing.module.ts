import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { OnboardeeComponent } from './onboardee/onboardee.component';
import { ViewOnboardeeComponent } from './view-onboardee/view-onboardee.component';
import { EditOnboardeeComponent } from './edit-onboardee/edit-onboardee.component';
import { RouteGuardService } from './service/route-guard.service';
import { ShowDemandsComponent } from './show-demands/show-demands.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/:id', component: HomeComponent, canActivate: [RouteGuardService] },
  { path: 'onboardee', component: OnboardeeComponent, canActivate: [RouteGuardService] },
  { path: 'view/:id', component: ViewOnboardeeComponent, canActivate: [RouteGuardService] },
  { path: 'edit/:id', component: EditOnboardeeComponent, canActivate: [RouteGuardService] },
  { path: 'demands', component: ShowDemandsComponent, canActivate: [RouteGuardService] },

  // <--------- Place every route above it --------->
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

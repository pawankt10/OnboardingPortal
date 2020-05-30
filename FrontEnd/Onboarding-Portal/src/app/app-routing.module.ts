import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  // { path: 'home/:name', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'update', component: UpdateComponent },

  // <--------- Place every route above it --------->
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home-components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialloginconfigs';
import { OnboardeeComponent } from './home-components/onboardee/onboardee.component';
import { ViewOnboardeeComponent } from './home-components/view-onboardee/view-onboardee.component';
import { EditOnboardeeComponent } from './home-components/edit-onboardee/edit-onboardee.component';
import { ShowDemandsComponent } from './show-demands/show-demands.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    OnboardeeComponent,
    ViewOnboardeeComponent,
    EditOnboardeeComponent,
    ShowDemandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

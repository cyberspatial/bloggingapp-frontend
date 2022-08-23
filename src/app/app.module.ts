import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';


import {UserService} from './service/user.service';
import { BlogService } from './service/user.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MypostComponent } from './components/mypost/mypost.component';
import { OtherBlogComponent } from './components/other-blog/other-blog.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
   LoginComponent,
   HomeComponent,
   MypostComponent,
   OtherBlogComponent,
   ForgotpassComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

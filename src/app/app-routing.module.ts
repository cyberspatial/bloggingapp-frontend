import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from './components/register/register.component';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MypostComponent } from './components/mypost/mypost.component';
import { OtherBlogComponent } from './components/other-blog/other-blog.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path: 'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'home/mypost',component:MypostComponent},
  {path:'home/otherblog',component:OtherBlogComponent},
  {path:'forgot',component:ForgotpassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ForgotpassComponent,OtherBlogComponent,MypostComponent,HomeComponent,LoginComponent,RegisterComponent,LandingComponent]

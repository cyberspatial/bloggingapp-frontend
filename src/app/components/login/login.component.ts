import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  message='';
  userdatalogin =new User();
  
  constructor(private usrservice:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(form:NgForm){
    this.usrservice.loginUser(this.user).subscribe(
      data => {//console.log("response recieved");
      this.userdatalogin = data;
      this.usrservice.loginedUserDetails = data;
     // console.log(this.userdatalogin);
      this.router.navigate(['/home']);
    },
    error =>{console.log("error");
  this.message="Bad user Credentials";});
  }

}

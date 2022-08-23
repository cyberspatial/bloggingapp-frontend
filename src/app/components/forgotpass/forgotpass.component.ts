import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  errormsg:string="";
  useremail:string="";
  userpassword:string="";
  emailpass:[string,string]=["",""];

  user:User = new User();
  constructor(private usrService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

updateUser(form:NgForm)
{ this.emailpass =[this.useremail,this.userpassword]
   
  console.log(this.emailpass);
  this.usrService.updatePass(this.emailpass).subscribe(
    data=>{console.log("done");},
    error=>{
      this.router.navigate(['/login']);
  }
  );
  }
}


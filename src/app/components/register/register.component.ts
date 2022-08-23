import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:User = new User();

  isValid:boolean = false;
  isRegistered:boolean= true;


 
  constructor(private usrService:UserService, private router:Router) { }
  
  ngOnInit(): void {
    
    
  }

  addUserData(form:NgForm)
  {

     this.usrService.addUser(this.register).subscribe(data=>{alert("Succesfully created your account");console.log(this.register);this.router.navigate(['/login']);}, error=>{this.isRegistered=false;form.resetForm(); this.isValid=false});
  }
 

  PassChange(event:any):void
  {
    if(this.register.password == this.register.repass)
{
  this.isValid = true;
  //console.log(this.register.password);
  //console.log(this.register.repass);
  //console.log(this.isValid);
 

}
else{
  this.isValid  = false;
}
  }


}

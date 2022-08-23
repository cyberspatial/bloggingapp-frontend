import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/service/user.service';
import { Post } from 'src/app/Model/Post';
import { BlogService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userloggedin:User = new User();
  postdetails:Post = new Post("","","",{});
  
   
  constructor(private usrService:UserService,private blgService:BlogService) {

   }

  ngOnInit(): void {
    this.userloggedin = this.usrService.loginedUserDetails;
    this.postdetails = new Post(this.userloggedin.email,"","",{});
   
  }
  

  randomString()
  {
     var text="";
     var possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
     for(var i =0;i<10;i++)
     {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
     }
     return text;

  }
  addPost(form:NgForm){
    this.postdetails.pid = this.randomString();
    this.postdetails.email = this.userloggedin.email;
    //console.log("tryingto print"+this.postdetails.email);
    this.blgService.addPost(this.postdetails).subscribe(
      data => {
        alert("successfully added post");
      //  console.log(this.postdetails);
                form.resetForm();},
      error=>{console.log("failed to add")}
    )
    ;
  }
 
}

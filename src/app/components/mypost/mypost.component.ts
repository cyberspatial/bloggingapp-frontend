import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/Post';
import { User } from 'src/app/Model/User';
import { BlogService, UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

 
  userloggedin:User = new User();
  bloglist:Post[] =[];
  emailofuser:string="";
  constructor(private usrService:UserService,private blgService:BlogService) { }

  ngOnInit(): void {
    this.userloggedin = this.usrService.loginedUserDetails;
    this.emailofuser = this.userloggedin.email;
    this.getPostbyEmail(this.emailofuser);
  }

 
  
  getPostbyEmail(emailuser:string){
    this.blgService.getPostbyEmail(emailuser).subscribe(res=>{
      this.bloglist=res;
      console.log("running");
      console.log(this.bloglist);
    },
    err=>{
      console.log("error while fetching");
    })

  }
  
  deleteblog(blog:Post,emailuser:string){

    this.blgService.deleteBlog(blog).subscribe(res=>{
      console.log(res);
      alert('Blog deleted successfully');
      this.getPostbyEmail(emailuser);

    },err=>{
     console.log(err);
    });
   

  }

}

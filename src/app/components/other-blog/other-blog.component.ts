import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { Post } from 'src/app/Model/Post';
import { BlogService, UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { MapType } from '@angular/compiler';

@Component({
  selector: 'app-other-blog',
  templateUrl: './other-blog.component.html',
  styleUrls: ['./other-blog.component.css']
})
export class OtherBlogComponent implements OnInit {
  loggedinuser:User=new User();
  Post:Post = new Post("","","",{});
  commentbyuser:string="";
  postid:string="";
  OtherUserlist:Post[]=[];

  constructor(private usrService:UserService, private blgService:BlogService) { }

  ngOnInit(): void {
  this.loggedinuser = this.usrService.loginedUserDetails;
  this.getOtherBlogs(this.loggedinuser.email);
 
  }

  getOtherBlogs(email:string){
   this.blgService.getOtherPost(email).subscribe(
    
    data=>{
      this.OtherUserlist = data;
      console.log(this.OtherUserlist);


    },
    error=>{
      console.log(error);

    }
   );
  }

  addComment(form:NgForm)
  
  { 
    
    let mp =new Map();
    mp.set(this.loggedinuser.name,this.commentbyuser);
    this.Post.comments = mp;
    console.log(this.Post);
    this.blgService.addComment(this.Post).subscribe(
      data =>{
        console.log("adding comment");
        console.log(this.Post);
        this.getOtherBlogs(this.loggedinuser.email);
      },
      error=> {
        console.log(error);
      }

    );


  }
  


}

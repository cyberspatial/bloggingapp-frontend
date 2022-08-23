import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Model/User'
import { Post } from '../Model/Post';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 registerUserURL:string;
 loginUserURL:string;
 updatepassURL:string;
 public loginedUserDetails: User =new User();
  constructor(private http: HttpClient)
{
  this.registerUserURL = 'http://localhost:8088/register';
  this.loginUserURL="http://localhost:8088/login";
  this.updatepassURL="http://localhost:8088/forgot"

}
addUser(user:User):Observable<User>{
  return this.http.post<User>(this.registerUserURL,user);
}
loginUser(user:User):Observable<any>{
  return this.http.post<any>(this.loginUserURL,user);
}

updatePass(emailpass:[string,string]):Observable<any>{
  console.log(emailpass);
  return this.http.put<any>(this.updatepassURL,emailpass);
}
}

@Injectable({
  providedIn: 'root'
})
export class BlogService{
  addPostURL:string;
  seemyPostURL:string;
  seeOtherBlogURL:string;
  deleteBlogURL:string;
  addCommentURL:string;
 constructor(private http:HttpClient)
 {
  this.addPostURL ="http://localhost:8088/home";
  this.seemyPostURL="http://localhost:8088/home/mypost";
  this.deleteBlogURL = "http://localhost:8088/home/deleteBlogByPid";
  this.seeOtherBlogURL="http://localhost:8088/home/otherblog";
   this.addCommentURL="http://localhost:8088/home/addcomment";

 }
 
 addPost(blog:Post):Observable<Post>{
  return this.http.post<Post>(this.addPostURL,blog);
 }
 getPostbyEmail(email:string):Observable<Post[]>{
  return this.http.get<Post[]>(`${this.seemyPostURL}/${email}`);
 }

 deleteBlog(post:Post):Observable<Post>{
  return this.http.delete<Post>(`${this.deleteBlogURL}/${post.pid}`);
 }

 getOtherPost(email:string):Observable<Post[]>{
 return this.http.get<Post[]>(`${this.seeOtherBlogURL}/${email}`);
 }

 addComment(blog:Post):Observable<Post>{
  return this.http.put<Post>(this.addCommentURL,blog);
 }
 

}


export class Post {
    pid?:string;
    email:string;
    title:string;
    content:string;
    comments?:any;
    constructor(email:string,title:string,content:string,comment:any) {
   
       this.email = email; 
       this.title = title;
       this.content = content;
       this.comments= comment;
    }
}
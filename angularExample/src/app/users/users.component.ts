import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public isHide=true;
  
  users:{userName:string,userEmail:string,userPhone:string}[] =[
  {
    userName:"john Doe",
    userEmail:"john@gmail.com",
    userPhone:"12331311"
  },
  {
    userName:"jane Doe",
    userEmail:"jane@gmail.com",
    userPhone:"1454541311"
  },
  {
    userName:"joe Doe",
    userEmail:"joe@gmail.com",
    userPhone:"11548411"
  }
  ]
    constructor() { }
  
    ngOnInit(): void {
    }

    onsubmit(uname:string,uemail:string,uphone:string){
      const user={
        userName:uname,
        userEmail:uemail,
        userPhone:uphone
      }
      this.users.push(user);
    }
    onAddUserData(event:any){
      this.users.push(event);
    }

}

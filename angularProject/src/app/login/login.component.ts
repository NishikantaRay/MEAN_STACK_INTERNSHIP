import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  public email!:string;
  public password!:string;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this._router.navigate(['/home']);
    }else{
      localStorage.clear();
    }
  }
  onLoginForm(){
    const logininfo={
      email:this.email,
      password:this.password
    }
    this._userService.loginUser(logininfo).subscribe(response=>{
      // console.log(response);
      
      this.message=response.message;
      this.isSuccess=true;
      this.isError=false;
      localStorage.setItem('token',response.token);
      localStorage.setItem('userID',response.userData.id);
      localStorage.setItem('userName',response.userData.name);
      this._router.navigate(['/home']);
    },err=>{
      this.message=err.error.message;
      this.isSuccess=false;
      this.isError=true;
      
    })
  }
}

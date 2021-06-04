import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heading:string ="LOGIN PAGE";
  email:string="Enter your Name";
  pass:string="Enter your Password";
  col:string="col-md-4 col-12";
  constructor() { }
  userName:string = "";
  password:string = "";
  isDisabled:boolean = true;
  onInput(event:any) {
    console.log(event);
    if(event.target.id == "userName")
      this.userName = event.target.value;

    if(event.target.id == "password")
      this.password = event.target.value;
    
    if(this.userName != ""  && this.password != ""){
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }

  }

  onSubmit(){
    if(this.userName.length <= 3){
      window.alert("Username can't be less than 3 characters.");
    } else {
      window.alert("Form submitted successfully.");
    }
  }
  
  ngOnInit(): void {
  }
  
}


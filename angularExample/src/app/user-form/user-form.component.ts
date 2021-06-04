import { Component, OnInit ,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() public adduserdata = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(uname:string,uemail:string,uphone:string){
    const user={
      userName:uname,
      userEmail:uemail,
      userPhone:uphone
    }

    this.adduserdata.emit(user);
  }
}

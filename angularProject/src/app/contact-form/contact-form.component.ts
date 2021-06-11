import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../contact.service'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public getid:string=localStorage.getItem('userID')??'null';
  public contactin = new Contact('','','','',this.getid);
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  constructor(private _contactService:ContactService) { }


  ngOnInit(): void {
  }
  addDataForm(){
    this._contactService.addUserData(this.contactin).subscribe(Response=>{
      console.log(Response);
      this.message=Response.message;
      this.isSuccess=true;
      this.isError=false;
      },err=>{
        // console.log(err);
        this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
      })
  }
}

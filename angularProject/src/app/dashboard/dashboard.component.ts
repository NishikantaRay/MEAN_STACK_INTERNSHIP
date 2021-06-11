import { Component, OnInit } from '@angular/core';
import {DashService} from '../dash.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Data:any[]=[];
  
  constructor(private _ps:DashService,private _router:Router) {
   }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.loadContacts();
    }else{
     
      localStorage.clear();
      this._router.navigate(['/login']);
    }
    
    
  }
  loadContacts(){
    this._ps.listcontactbyuser().subscribe(Response=>{
      console.log(Response);
      this.Data=Response.contactData;
    },err=>{
      console.log(err);
    } )
  }
  logout():void{
    localStorage.clear();
    this._router.navigate(['/login']);
  }
  onDeleteContact(contact:any){
    this._ps.deleteContact(contact._id).subscribe(res=>{
      alert(res.message);
    }, err=>{
      alert(err.error.message);
    });
    this.loadContacts();
  }
}

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
      this._ps.listcontactbyuser().subscribe(Response=>{
        console.log(Response);
        this.Data=Response.contactData;
      },err=>{
        console.log(err);
      } )
    }else{
     
      localStorage.clear();
      this._router.navigate(['/login']);
    }
    
  }
  logout():void{
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}

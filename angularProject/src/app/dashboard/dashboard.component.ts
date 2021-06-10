import { Component, OnInit } from '@angular/core';
import {DashService} from '../dash.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public contactData:any[]=[];
  constructor(private _ps:DashService) { }

  ngOnInit(): void {
    this._ps.listcontactbyuser().subscribe(Response=>{
      console.log(Response);
      
    },err=>{
      console.log(err);
    } )
  }

}

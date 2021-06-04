import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {  
  Tasks:{userDesc:string,startDate:string}[] =[
  {
    userDesc:"agafagkf",
    startDate:"23:12"
  }
  ]
    constructor() { }
  
    ngOnInit(): void {
    }

    onsubmit(udesc:string,udate:string){
      const task={
        userDesc:udesc,
        startDate:udate
      }
      this.Tasks.push(task);
    }
    onAddUserData(event:any){
      this.Tasks.push(event);
    }

}

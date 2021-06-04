import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('Tdata') public userdata:any
  @Input('td') public evenorodd:any
  constructor() { }
  checkBox=1;
  ngOnInit(): void {
  }

}

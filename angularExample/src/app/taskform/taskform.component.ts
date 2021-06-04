import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  @Output() public adduserdata = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }
  onsubmit(udesc: string, udate: string) {
    const task = {
      userDesc: udesc,
      startDate: udate
    }

    this.adduserdata.emit(task);
  }

}

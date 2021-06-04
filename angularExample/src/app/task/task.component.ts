import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('Tdata') public userdata: any
  @Input('td') public evenorodd: any
  public check: number

  constructor() {
    this.check = 0;
  }

  onCheck(event: any) {
    if (event.target.checked) {
      this.check = 1;
    } else {
      this.check = 0;
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private myArr:Array<object> = [];

  constructor() { }
  

  ngOnInit() {
    console.log('angular initializing..');
    this.myArr = [
      {id: 1, name:"eddy lin", profession:"stu", school:"csuf"},
      {id: 2, name:"john doe", profession:"stu", school:"csuf"},
      {id: 3, name:"jane doe", profession:"stu", school:"csuf"},
      {id: 4, name:"mike doe", profession:"stu", school:"csuf"},
      {id: 5, name:"dose doe", profession:"stu", school:"csuf"},
      {id: 6, name:"kelly", profession:"stu", school:"csuf"},
    ]
    console.log('myArray--->', this.myArr)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private _title = 'TestApp';
  private myArr:Array<object> = [];
  //private myArr2:Object[] = [];  this line equals the above one
  constructor() {
    //setup

  }

  ngOnInit() {
    console.log('angular initializing..');
    this.myArr = [
      {id: 1, name:"eddy lin", profession:"stu", school:"csuf"},
      {id: 2, name:"john doe", profession:"stu", school:"csuf"},
      {id: 3, name:"jane doe", profession:"stu", school:"csuf"},
      {id: 4, name:"mike doe", profession:"stu", school:"csuf"},
      {id: 5, name:"dose doe", profession:"stu", school:"csuf"},
    ]
    console.log('myArray--->', this.myArr)
  }

  private get Title() {
    return this._title;
  }


  private set Title(title:any) {
    this._title = title;
  }
}
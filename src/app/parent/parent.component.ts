import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public msgForChild = "Work Hard, Party Hard";
  public msgFromChild!:string;
  constructor() { }

  ngOnInit(): void {
  }
  public onClickHandler(){
    alert("Button Clicked !!!")
  }
  public onChildClickHandler(info:string){
    console.log(info);
    this.msgFromChild = info;
  }
}

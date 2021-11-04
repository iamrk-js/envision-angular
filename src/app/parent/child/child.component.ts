import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() public msgFromParent!:string;
 @Output() public childClick:EventEmitter<string> = new EventEmitter<string>();
 public msg:string = "Yes I'm working realy Bahot Hard."
  constructor() { }

  ngOnInit(): void {
    
  }
  onChildClick(){
    this.childClick.emit(this.msg)
  }
}

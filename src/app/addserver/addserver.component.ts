import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.scss']
})
export class AddserverComponent implements OnInit {
  public newServerName!: string;
  public newServerContent!: string;
  constructor() { }

  ngOnInit(): void {
  }
  public onAddServer() {
  
  }
  public onAddBluprint() {
   
  }

  public emptyControls() {
    this.newServerContent = "";
    this.newServerName = "";
  }
}

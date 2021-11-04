import { Component } from '@angular/core';
import { iServer } from './model/server.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataBinding';
  demoDivFlag: boolean = true;
 
  public serverElements: iServer[] = [
    {
      name : "Test Server",
      content : "Test Server Content",
      type : "server"
    },
    {
      name : "Test Server 2",
      content : "Test Server 2 Content",
      type : "blueprint"
    }
  ];
  onBtnClick() {
    this.demoDivFlag = !this.demoDivFlag;
  }

 


}

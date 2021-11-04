import { Component, Input, OnInit } from '@angular/core';
import { iServer } from '../model/server.interface';

@Component({
  selector: 'app-server-cards',
  templateUrl: './server-cards.component.html',
  styleUrls: ['./server-cards.component.scss']
})
export class ServerCardsComponent implements OnInit {
@Input()  public element!:iServer;
  constructor() { }

  ngOnInit(): void {
  }

}

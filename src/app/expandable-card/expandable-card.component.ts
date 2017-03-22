import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-card',
  templateUrl: './expandable-card.component.html',
  styleUrls: ['./expandable-card.component.css']
})
export class ExpandableCardComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onOpen(){
    this.isOpen = !this.isOpen;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

  callFunc() {
    console.log("counter increased")
  }

}

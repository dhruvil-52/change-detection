import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit,DoCheck {
  @Input() array: number[] = [];
  numOfChangeDetected: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.numOfChangeDetected++;
    console.log(`no Of Change Detected in GRAND CHILD ${this.numOfChangeDetected}`)
  }
  console() {
    console.log("grand child called")
  }
}

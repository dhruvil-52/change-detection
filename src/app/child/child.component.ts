import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

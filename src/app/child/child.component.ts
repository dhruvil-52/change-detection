import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() user: any;
  num: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
    // below code tell angular to detach this comp from change detection, event @Input data we cant get
    cdr.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if you use cdr.detach(); and want Input bound data then we have to tell angular in ngOnChange that detect change
    // if below code not here than num value start from 1 if you use cdr.detach(); 
    this.cdr.detectChanges();
  }


  ngOnInit(): void {
    // setInterval, setTimeout, promise, subscription not work with onPush without telling angular to detect change by this.cdr.detectChanges();
    // ChangeDetectionStrategy.OnPush show 0 value of num as well
    setInterval(() => {
      this.num = this.num + 1;
      this.cdr.detectChanges();
    }, 100);
  }

  callFunc() {
    console.log("counter increased")
  }

}

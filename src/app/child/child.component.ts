import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges {

  arr: number[] = [];
  @Input() user: any;
  // num: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
    // below code tell angular to detach this comp from change detection, event @Input data we cant get
    // cdr.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if you use cdr.detach(); and want Input bound data then we have to tell angular in ngOnChange that detect change
    // if below code not here than num value start from 1 if you use cdr.detach(); 
    // this.cdr.detectChanges();
  }


  ngOnInit(): void {
    // setInterval, setTimeout, promise, subscription not work with onPush without telling angular to detect change by this.cdr.detectChanges();
    // ChangeDetectionStrategy.OnPush show 0 value of num as well
    // setInterval(() => {
    //   this.num = this.num + 1;
    //   this.cdr.detectChanges();
    // }, 100);
  }

  callFunc() {
    console.log("counter increased")
  }



  startPushingInArray() {
    setInterval(() => {
      //  below print arr in grand child
      // this.arr = [1, 2]
      //  below not print arr in grand child because it not chnage arr reference
      // this.arr.push(Math.random())

      //  below print arr in grand child because it chnage arr reference
      this.arr.push(Math.random())
      this.arr = [...this.arr]
      this.cdr.detectChanges();
    }, 1000)
  }

}

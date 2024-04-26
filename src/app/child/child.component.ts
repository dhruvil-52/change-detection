import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() user: any;
  num: number = 0;

  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    // setInterval not work with onPush without telling angular to detect change by this.cdr.detectChanges();
    setInterval(() => {
      this.num = this.num + 1;
      this.cdr.detectChanges();
    }, 100);
  }

  callFunc() {
    console.log("counter increased")
  }

}

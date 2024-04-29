import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection';
  users = [
    { name: 'Dhruvil' },
    { name: 'Brijesh' },
  ]

  constructor(private cdr:ChangeDetectorRef){

  }

  onTyped(value: any) {
    console.log("text entered")
  }

  changeArr() {
    this.users[0] = {
      ...this.users[0],
      name: "Kano"
    };
    console.log("button clicked")
    // this.cdr.detectChanges();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection';
  users = [
    { name: 'Dhruvil' },
    { name: 'Nirav' },
    { name: 'Brijesh' },
    { name: 'Nikil' }
  ]

  onTyped(value: any) {
    console.log("text entered")
  }
}

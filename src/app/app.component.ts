import { Component } from '@angular/core';

@Component({
  //selector: tên component nhúng vào html
  selector: 'app-root',
  // templateUrl: liên kết file html vào trong component
  templateUrl: './app.component.html',
  // styleUrls: liên kết scss vào trong component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe48Angular';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  message: string = 'Hello Khoa';
  username: string = '';
  fullName: string = '';
  email: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  changeMessage(messageRef: any) {
    console.log(messageRef.value);
    this.message = messageRef.value
  }
  changeUserName(event: any) {
    this.username = event.target.value;
  }
}

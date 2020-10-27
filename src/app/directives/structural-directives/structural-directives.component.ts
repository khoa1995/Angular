import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isVisible: boolean = false;
  isLoggedIn: boolean = true;
  color: string = "blue";

  dssv: any[] = [
    {hoTen: "Khoa", lop: 'FE48'},
    {hoTen: "Minh", lop: 'FE49'},
    {hoTen: "Tú", lop: 'FE50'},
    {hoTen: "Chang", lop: 'FE51'},
  ]

  dshs: any[] | null = null
  constructor() { }

  ngOnInit(): void {}

  layDSHS() {
    this.dshs = [
      {hoTen: "Khoa", lop: 'FE48'},
      {hoTen: "Minh", lop: 'FE49'},
      {hoTen: "Tú", lop: 'FE50'},
      {hoTen: "Chang", lop: 'FE51'},
    ]
  }

}

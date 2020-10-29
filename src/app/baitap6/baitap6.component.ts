import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss']
})
export class Baitap6Component implements OnInit {
  dssp: any[] = [
    {maSP:'DT' , tenSP: 'Dien thoai', gia: 10000},
    {maSP:'TV' , tenSP: 'Tivi', gia: 10000},
    {maSP:'LV' , tenSP: 'Lo vi song', gia: 10000},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  themSP(maSP: string, tenSP: string, gia: number) {
    this.dssp.push({maSP, tenSP, gia})
  }
}

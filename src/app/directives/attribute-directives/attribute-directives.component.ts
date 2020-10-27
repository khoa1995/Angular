import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = true;
  isLoading: boolean = false;
  color: string = 'red';
  text: string = 'white';
  message: string = '<span class="text-primary">OK</span>';
  constructor() { }

  ngOnInit(): void {
  }

}

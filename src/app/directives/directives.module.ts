import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';



@NgModule({
  declarations: [StructuralDirectivesComponent],
  imports: [
    CommonModule
  ],
  exports: [StructuralDirectivesComponent],
})
export class DirectivesModule { }

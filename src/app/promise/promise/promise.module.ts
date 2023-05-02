import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise.component';



@NgModule({
  declarations: [
    PromiseComponent
  ],
  exports: [
    PromiseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PromiseModule { }

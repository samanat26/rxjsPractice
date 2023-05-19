import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';

@NgModule({
  declarations: [ObservableComponent],
  exports: [ObservableComponent],
  imports: [CommonModule],
})
export class ObservableModule {}

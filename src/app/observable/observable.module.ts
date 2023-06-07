import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './from-event/from-event.component';

@NgModule({
  declarations: [ObservableComponent, ListComponent, FromEventComponent],
  exports: [ObservableComponent],
  imports: [CommonModule, RouterModule],
})
export class ObservableModule {}

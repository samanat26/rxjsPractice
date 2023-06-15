import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ArrayComponent } from './array/array.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'switchmap', component: SwitchMapComponent },
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
    ],
  },
  { path: 'array', component: ArrayComponent },
  { path: '', redirectTo: '/observable', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ArrayComponent } from './array/array.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent, children : [
    {path:'', component : ListComponent},
    {path:'event', component : FromEventComponent},
    {path:'interval', component : IntervalComponent},
  ] },
  { path: 'array', component: ArrayComponent },
  { path: '', redirectTo: '/observable', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

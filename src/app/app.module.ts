import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './includes/header/header.module';


import { ObservableModule } from './observable/observable.module';
import { ArrayComponent } from './array/array.component';
import { PromiseComponent } from './promise/promise.component';
import { IntervalComponent } from './interval/interval.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';

@NgModule({
  declarations: [AppComponent, ArrayComponent,PromiseComponent, IntervalComponent, SwitchMapComponent, OfFromComponent, ToArrayComponent, CustomObservableComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, ObservableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

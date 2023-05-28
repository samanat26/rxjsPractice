import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './includes/header/header.module';

import { PromiseModule } from './promise/promise.module';
import { ObservableModule } from './observable/observable.module';
import { ArrayComponent } from './array/array.component';

@NgModule({
  declarations: [AppComponent, ArrayComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, PromiseModule, ObservableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

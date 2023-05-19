import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './includes/header/header.module';
import { CardsModule } from './includes/cards/cards.module';

import { PromiseModule } from './promise/promise.module';
import { ObservableModule } from './observable/observable.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, CardsModule, PromiseModule, ObservableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

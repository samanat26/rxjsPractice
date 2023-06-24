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
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ConcateMapComponent } from './concate-map/concate-map.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectReplayComponent } from './subject-replay/subject-replay.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipForkComponent } from './zip-fork/zip-fork.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    PromiseComponent,
    IntervalComponent,
    SwitchMapComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    ConcateMapComponent,
    SubjectComponent,
    SubjectReplayComponent,
    AsyncSubjectComponent,
    ConcatMergeComponent,
    MergeMapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineLatestComponent,
    ZipForkComponent,
    CatchErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ObservableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

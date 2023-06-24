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
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { FilterComponent } from './filter/filter.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { SubjectComponent } from './subject/subject.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SubjectReplayComponent } from './subject-replay/subject-replay.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcateMapComponent } from './concate-map/concate-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipForkComponent } from './zip-fork/zip-fork.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'debounceTime', component: DebounceTimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replaySubject', component: SubjectReplayComponent },
      { path: 'asyncSubject', component: AsyncSubjectComponent },
      { path: 'conMerge', component: ConcatMergeComponent },
      { path: 'merge', component: MergeMapComponent },
      { path: 'concate', component: ConcateMapComponent },
      { path: 'switchmap', component: SwitchMapComponent },
      { path: 'exhausthmap', component: ExhaustMapComponent },
      { path: 'share', component: ShareReplayComponent },
      { path: 'combine', component: CombineLatestComponent },
      { path: 'join', component: ZipForkComponent },
      { path: 'error', component: CatchErrorComponent },
      { path: 'retry', component: RetryComponent },
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

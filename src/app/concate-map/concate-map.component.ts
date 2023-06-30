import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import {
  concatAll,
  concatMap,
  delay,
  from,
  map,
  merge,
  mergeMap,
  of,
} from 'rxjs';

@Component({
  selector: 'app-concate-map',
  templateUrl: './concate-map.component.html',
  styleUrls: ['./concate-map.component.css'],
})
export class ConcateMapComponent {
  constructor(private list: DesignUtiliesPrintService) {}
  get(res: any) {
    return of('video : ' + res).pipe(delay(2000));
  }
  ngOnInit() {
    //MAP + concate all
    const videos = from(['tech', 'random', 'funny'])
      .pipe(
        map((res) => this.get(res)),
        concatAll()
      )
      .subscribe((res) => {
        console.log(res);
        this.list.print(res, 'elContainer');
      });
    //mergeMAP - it take a delayjust in start then it merges the value
    const videos2 = from(['tech', 'random', 'funny'])
      .pipe(mergeMap((res) => this.get(res)))
      .subscribe((res) => {
        console.log(res);
        this.list.print(res, 'elContainer2');
      });
    //concatMap it works in sequence
    from(['tech', 'random', 'funny'])
      .pipe(concatMap((res) => this.get(res)))
      .subscribe((res) => {
        console.log(res);
        this.list.print(res, 'elContainer3');
      });
  }
}

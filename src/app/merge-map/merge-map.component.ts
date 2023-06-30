import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { from, map, mergeAll, mergeMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent {
  constructor(private value: DesignUtiliesPrintService) {}

  getData(ldata: string) {
    // console.log('data', ldata);
    return of(ldata + 'video Uploaded');
  }

  list = ['tech ', 'random ', 'funny '];

  ngOnInit() {
    // by map - subscribes 2 times bcz an obs returns obs
    const source = from(this.list)
      .pipe(
        map((res) => this.getData(res)),
        tap((res) => {
          console.log(res);
        })
      )
      .subscribe((res) =>
        res.subscribe((res1) => {
          this.value.print(res1, 'elContainer');
        })
      );
    // by mergeall
    const source2 = from(this.list)
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res) => this.value.print(res, 'elContainer2'));

    // by mergeMap
    const source3 = from(this.list)
      .pipe(mergeMap((res) => this.getData(res)))
      .subscribe((res) => this.value.print(res, 'elContainer3'));
  }
}

import { Component } from '@angular/core';
import { Subscription, from, interval, map, take } from 'rxjs';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  sub = Subscription;

  res1: any;
  res2: any;

  constructor(private _design: DesignUtiliesPrintService) {}
  ngOnInit() {
    //ex -01
    const videoSub = interval(1000);

    videoSub
      .pipe(
        map((val) => 'video' + val),
        take(10)
      )
      .subscribe((res) => {
        // console.log(res);
        this.res1 = res;
      });
    //ex -02
    const videoSub2 = interval(1000);

    videoSub2
      .pipe(
        map((val) => val * 3),
        take(11)
      )
      .subscribe((res) => {
        // console.log(res);
        this.res2 = res;
      });
    //ex -03
    const videoSub3 = from([
      { id: 1, name: 'suman' },
      { id: 2, name: 'ali' },
      { id: 3, name: 'amana' },
      { id: 4, name: 'arshad' },
      { id: 5, name: 'asma' },
      { id: 6, name: 'milli' },
    ]);

    videoSub3.pipe(map((val) => val.name)).subscribe((res) => {
      console.log(res);
      // this.res2 = res;
      this._design.print(res, 'elcontainer');
    });
  }
}

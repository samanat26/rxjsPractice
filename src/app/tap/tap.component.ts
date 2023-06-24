import { Component } from '@angular/core';
import { Subscription, interval, map, take, tap } from 'rxjs';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent {
  sub: Subscription = new Subscription();
  sub2: Subscription = new Subscription();
  res1: string | undefined;
  myColor: any;

  constructor(private _design: DesignUtiliesPrintService) {}

  ngOnInit() {
    const value = interval(1000);
    const names = [
      { id: 1, name: 'suman' },
      { id: 2, name: 'ali' },
      { id: 3, name: 'amana' },
      { id: 4, name: 'arshad' },
      { id: 5, name: 'asma' },
      { id: 6, name: 'milli' },
    ];

    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    //Ex-01
    this.sub = value

      .pipe(
        tap((val) => {
          console.log('tap=>', val);
        }),
        map((res) => names[res].name),
        tap((val) => {
          console.log('maptap=>', val);
        }),

        take(6)
      )
      .subscribe((res) => {
        // console.log(res);\
        this.res1 = JSON.stringify(res);
        this._design.print(this.res1, 'elContainer');
      });

    //Ex-02
    this.sub2 = value

      .pipe(
        tap((val) => {
          this.myColor = colors[val];
          console.log('tap=>', val);
        }),
        map((res) => colors[res]),
        tap((val) => {
          console.log('maptap=>', val);
        }),

        take(6)
      )
      .subscribe((res) => {
        // console.log(res);\
        // this.res1 = JSON.stringify(res);
        this._design.print(res, 'elContainer2');
      });
  }
  onDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}

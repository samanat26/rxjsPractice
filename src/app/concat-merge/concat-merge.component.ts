import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.css'],
})
export class ConcatMergeComponent {
  constructor(private _list: DesignUtiliesPrintService) {}
  ngOnInit() {
    const video = interval(1000).pipe(
      map((val) => 'V:' + (val + 1)),
      take(4)
    );
    // .subscribe((res) => console.log(res));
    //another
    const videoBroadCast = interval(1000).pipe(
      map((val) => 'b:' + (val + 1)),
      take(3)
    );
    //any other
    const videoChannel = interval(1000).pipe(
      map((val) => 'c:' + (val + 1)),
      take(5)
    );
    //use of concat
    const source = concat(video, videoBroadCast, videoChannel);

    source.subscribe((res) => {
      // console.log('after', res);
      this._list.print(res, 'elContainer');
    });
    ///////////////////////for merge//////////////////////////////

    const video2 = interval(2000).pipe(
      map((val) => 'V:' + (val + 1)),
      take(4)
    );
    // .subscribe((res) => console.log(res));
    //another
    const videoBroadCast2 = interval(1000).pipe(
      map((val) => 'b:' + (val + 1)),
      take(3)
    );
    //any other
    const videoChannel2 = interval(2500).pipe(
      map((val) => 'c:' + (val + 1)),
      take(5)
    );
    //use of merge
    const source2 = merge(video2, videoBroadCast2, videoChannel2);

    source2.subscribe((res) => {
      // console.log('after', res);
      this._list.print(res, 'elContainer2');
    });
  }
}

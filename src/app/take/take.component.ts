import { Component } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent {
  constructor(private _du: DesignUtiliesPrintService) {}

  randomNames = ['Suman', 'Ayesha', 'Alina', 'Maheen', 'Barka', 'Iqra', 'Noor'];

  ngOnInit() {
    //Ex -01 Take
    const source = from(this.randomNames).pipe(take(7));
    source.subscribe((res) => {
      // console.log(res);
      //to print
      this._du.print(res, 'elConatiner');
    });
    //Ex -02 TakeLast
    const source2 = from(this.randomNames).pipe(takeLast(3));
    source2.subscribe((res) => {
      this._du.print(res, 'elConatiner1');
    });
    //Ex -02 TakeUntil
    //takeUntil takes 2 conditions holding an observable
    const conObs = timer(5000);
    const conObs2 = fromEvent(document, 'click');
    // const source3 = from(this.randomNames).pipe(takeUntil(conObs));
    const source3 = interval(1000).pipe(takeUntil(conObs2));
    source3.subscribe((res) => {
      this._du.print(res, 'elConatiner2');
    });
  }
}

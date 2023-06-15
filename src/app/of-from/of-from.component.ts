import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent {
  objMsg: any; //property

  constructor(private _designService: DesignUtiliesPrintService) {}

  ngOnInit() {
    //Of example as a string
    const obs1 = of('suman', 'iqra', 'farheen');
    obs1.subscribe((res) => {
      console.log(res);
      this._designService.print(res, 'elContainer');
    });

    // as an object (key & value pair)
    const obj2 = of({ a: 'suman', b: 'Iqra', c: 'Farheen' });
    obj2.subscribe((res) => {
      this.objMsg = res;

      console.log(res);
      // this._designService.print(res , 'elContainer') // res contains strings so when obj comes it gives error
    });

    //From example Arrays
    const obs3 = from(['suman', 'iqra', 'farheen']);
    obs3.subscribe((res) => {
      console.log(res);
      this._designService.print(res, 'elContainer3');
    });

    //From example Promise
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 2000);
    });
    const obs4 = from(promise);
    obs4.subscribe((res) => {
      console.log(res);
      this._designService.print(res, 'elContainer4');
    });

    //from example string
    const obs5 = from('I am done');
    obs5.subscribe((res) => {
      console.log(res);
      this._designService.print(res, 'elContainer5');
    });
  }
}

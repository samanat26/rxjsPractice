import { Component } from '@angular/core';
import { Observable, Subscription, count } from 'rxjs';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css'],
})
export class CustomObservableComponent {
  techStatus: any;
  sub: Subscription = new Subscription();
  techStatus2: any;
  value: Subscription = new Subscription();
  nameStatus: any;
  name: any;

  constructor(private _design: DesignUtiliesPrintService) {}
  ngOnInit() {
    //Ex-01 (manual) emitted manually

    const cusObs1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Angular');
        // observer.complete();
      }, 1000);
      setTimeout(() => {
        observer.next('React');
        // observer.complete();
      }, 2000);
      //once it completes never goes forward
      setTimeout(() => {
        observer.next('Graphic Designer');
        observer.complete();
        this.techStatus = 'completed';
      }, 2000);

      setTimeout(() => {
        observer.next('Css , Html');
        observer.error('limit excced');
        this.techStatus = 'error';
      }, 3000);
    });
    cusObs1.subscribe((res) => {
      // console.log(res);
      this._design.print(res, 'elContainer');
    });

    //Ex - 02 (custom Interval)///
    const arr2 = ['angular', 'css', 'html', 'typescript'];
    const cusObs2 = new Observable((obs) => {
      let counter = 0;
      setInterval(() => {
        obs.next(arr2[counter]);
        if (counter >= 2) {
          obs.complete();
          this.techStatus2 = 'completed';
        }
        counter++;
      }, 1000);
    });
    this.sub = cusObs2.subscribe((res: any) => {
      // console.log(res);
      this._design.print(res, 'elContainer2');
    });

    //Ex -03//
    const names = ['Suman', 'avizah', 'yamena', 'sania', 'ali'];
    const nameObs = new Observable((obs) => {
      let inc = 0;
      setInterval(() => {
        obs.next(names[inc]);
        if (inc >= 4) {
          obs.complete();
          this.nameStatus = 'completed';
        }
        // else {
        //   obs.error();
        //   this.nameStatus = 'error';
        // }
        inc++;
      }, 1000);
    });
    this.value = nameObs.subscribe(
      (res) => {
        console.log('names', res);
        this.name = res;
      }

      // () => {
      //   this.nameStatus = 'completed';
      // },
      // () => {
      //   this.nameStatus = 'error';
      // }
    );
  }
  onDestroy() {
    this.sub.unsubscribe();
    this.value.unsubscribe();
  }
}

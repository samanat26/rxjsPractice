import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-subject-replay',
  templateUrl: './subject-replay.component.html',
  styleUrls: ['./subject-replay.component.css'],
})
export class SubjectReplayComponent {
  userList = ['video 1'];
  userList2: any[] = [];
  userList3: any[] = [];

  //subscribeModes
  sub2: boolean = false;
  sub3: boolean = false;

  //subscriptions

  subscription2: Subscription = new Subscription();
  subscription3!: Subscription;

  //toggle method
  unsub!: Subscription;
  toggle: boolean = true;

  constructor(private _video: DesignUtiliesPrintService) {
    this._video.exclusive.next(true);
  }
  ngOnInit() {
    this._video.videoBroadCast.subscribe((res) => {
      this.userList.push(res);
    });
  }

  add(val: any) {
    console.log(val.value);
    this._video.videoBroadCast.next(val.value);
  }

  subscribeBtn2() {
    if (this.sub2) {
      this.subscription2.unsubscribe();
    } else
      this.subscription2 = this._video.videoBroadCast.subscribe((res) =>
        this.userList2.push(res)
      );

    this.sub2 = !this.sub2;
  }
  subscribeBtn3() {
    if (this.sub3) {
      this.subscription3.unsubscribe();
    } else
      this.subscription3 = this._video.videoBroadCast.subscribe((res) =>
        this.userList3.push(res)
      );
    this.sub3 = !this.sub3;
  }

  toggleMethod() {
    const toggleInterval = interval(2000);
    if (this.toggle)
      this.unsub = toggleInterval.subscribe((res) => {
        this._video.videoBroadCast.next('video' + res);
      });
    else this.unsub.unsubscribe();
    this.toggle = !this.toggle;
  }

  ngOnDestroy() {
    this._video.exclusive.next(false);
  }
}

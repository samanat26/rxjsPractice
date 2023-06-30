import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent {
  value: any;
  sub: boolean = true;
  constructor(private _video: DesignUtiliesPrintService) {}
  ngOnInit() {
    this._video.videoEmit.subscribe((res) => {
      this.value = res;
    });
  }

  add(val: any) {
    console.log(val.value);

    this._video.videoEmit.next(val.value);
  }
  subscibe() {
    if (this.sub) {
      this._video.videoEmit.complete();
    }
    this.sub = !this.sub;
  }
}
//

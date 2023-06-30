import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtiliesPrintService {
  // exclusive!: new () => Subject<boolean>;
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Suman');
  videoBroadCast = new ReplaySubject<any>(3, 500);
  videoEmit = new AsyncSubject<any>();

  constructor() {}

  //to append an element by stream
  print(val: any, containerID: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerID)?.appendChild(el);
  }
  //to prepend an element by stream
  printDiv(val: any, containerID: string) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerID)?.prepend(el);
  }
}

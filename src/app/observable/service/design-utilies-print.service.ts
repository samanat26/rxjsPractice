import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtiliesPrintService {
  exclusive!: new () => Subject<boolean>;
  constructor() {}
  //to append an element by stream
  print(val: any, containerID: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerID)?.appendChild(el);
  }
}

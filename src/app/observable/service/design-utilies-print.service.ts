import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtiliesPrintService {
  constructor() {}
  //to append an element by stream
  print(val: string, containerID: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerID)?.appendChild(el);
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent {
  @ViewChild('input')
  input!: ElementRef;
  @ViewChild('myinput')
  myinput!: ElementRef;
  event: any;
  event2: any;

  constructor() {}

  ngAfterViewInit() {
    //Ex-01 Debounce Time
    const source = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(500)
    );
    source.subscribe((res) => {
      console.log(res);
      this.event = res;
      setTimeout(() => {
        this.event = null;
      }, 1000);
    });
    //Ex-02 Distinct until changed it helps to stop multiple requests
    const source2 = fromEvent<any>(this.myinput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
    source2.subscribe((res) => {
      console.log(res);
      this.event2 = res;
      setTimeout(() => {
        this.event2 = null;
      }, 1000);
    });
  }
}

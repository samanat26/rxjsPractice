import { Component } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent {
  users = [
    {
      name: 'suman',
      skill: 'developer',
    },
    {
      name: 'saim',
      skill: 'CA',
    },
    {
      name: 'hamad',
      skill: 'programmer',
    },
  ];
  constructor() {}
  sourceSub!: Subscription;

  ngOnInit() {
    //data get in array...

    //Ex- 01
    let source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
      // if(res>=8){
      //   this.sourceSub.unsubscribe();
      // }
    });

    //Ex- 02 array/object convert in observable stream then again gets as an array
    //from is used with arrays to make stream
    const value = from(this.users);
    value.pipe(toArray()).subscribe((res) => {
      console.log('array', res);
    });

    //Ex- 03
    const value2 = of('ali', 'suman', 'hmna', 'zara');
    value2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}

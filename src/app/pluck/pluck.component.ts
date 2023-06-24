import { Component } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent {
  obs: any = [];

  user!: [
    {
      name: 'suman';
      age: '25';
      job: {
        title: 'developer';
      };
    },
    {
      name: 'ali';
      age: '25';
      job: {
        title: 'developer';
      };
    },
    {
      name: 'hamza';
      age: '25';
      job: {
        title: 'developer';
      };
    }
  ];

  ngOnInit() {
    // const val = from(this.user);
    // val.pipe(pluck('name'), toArray()).subscribe((res) => {
    //   this.obs = res;
    // });
  }
}

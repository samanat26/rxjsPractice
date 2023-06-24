import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  dataMem = [
    {
      id: 1,
      name: 'suman',
      gender: 'female',
    },
    {
      id: 2,
      name: 'sania',
      gender: 'female',
    },
    {
      id: 3,
      name: 'sana',
      gender: 'female',
    },
    {
      id: 4,
      name: 'adeel',
      gender: 'male',
    },
    {
      id: 5,
      name: 'timmy',
      gender: 'male',
    },
  ];

  data1: any;
  data3: any;
  data2: { id: number; name: string; gender: string }[] = [];

  constructor() {}
  ngOnInit() {
    const source = from(this.dataMem);

    //Ex -01 by name len

    source
      .pipe(
        filter((member) => member.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        this.data1 = res;
      });

    //Ex-02 by gender
    source
      .pipe(
        filter((member) => member.gender == 'male'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });
    //Ex-03 by nth members
    source
      .pipe(
        filter((member) => member.id <= 3),
        toArray()
      )
      .subscribe((res) => {
        this.data3 = res;
      });
  }
}

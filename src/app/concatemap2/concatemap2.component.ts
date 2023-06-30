import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concatemap2',
  templateUrl: './concatemap2.component.html',
  styleUrls: ['./style.scss'],
})
export class Concatemap2Component {
  data = [
    {
      src: 'fb icon',
      name: 'Facebook',
      time: '4 seconds',
      placeImage: 'place image',
      user: 'Alex Jhon',
      p: 'comment',
    },
    {
      src: 'tw icon',
      name: 'Twitter',
      time: '3 seconds',
      placeImage: 'place image',
      user: 'James',
      p: 'comment',
    },
    {
      src: 'fb icon',
      name: 'Facebook',
      time: '2 seconds',
      placeImage: 'place image',
      user: 'honey Jhon',
      p: 'comment',
    },
  ];

  constructor(private Div: DesignUtiliesPrintService) {}
  ngOnInit() {
    from(this.data)
      .pipe(concatMap((res) => this.getHtml(res)))
      .subscribe((res) => {
        this.Div.printDiv(res, 'el');
      });
  }
  getHtml(data: any) {
    return of(
      `  <div class="header">
            <div class="app">
              <img src="" alt="${data.src}" width="20" class="src" />
              ${data.name}
            </div>
            <div class="time">${data.time}</div>
          </div>
          <div class="body">
            <img src="${data.placeimage}" alt="placeimage" class="item-img" />
            <strong>${data.user}</strong>
            <p>${data.p}</p>
          </div>`
    ).pipe(delay(1000));
  }
}

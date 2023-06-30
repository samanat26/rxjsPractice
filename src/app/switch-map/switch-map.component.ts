import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';
import { concatMap, delay, from, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent {
  constructor(private du: DesignUtiliesPrintService) {}

  getValue(data: string) {
    return of(data + ' video ').pipe(delay(2000));
  }

  ngOnInit() {
    const source = from(['tech', 'random', 'funny']);
    //merge map
    source.pipe(mergeMap((res) => this.getValue(res))).subscribe((res) => {
      this.du.print(res, 'elContainer');
    });

    //Concate map

    source.pipe(concatMap((res) => this.getValue(res))).subscribe((res) => {
      this.du.print(res, 'elContainer2');
    });

    //switch map

    source.pipe(switchMap((res) => this.getValue(res))).subscribe((res) => {
      this.du.print(res, 'elContainer3');
    });
  }
}

//switch map gives only a latest emissions and cancel the rest

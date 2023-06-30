import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from 'src/app/observable/service/design-utilies-print.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component {
  userName!: string;

  constructor(private name: DesignUtiliesPrintService) {
    this.name.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  user(val: any) {
    this.name.userName.next(val.value);
  }
}

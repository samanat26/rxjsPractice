import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from 'src/app/observable/service/design-utilies-print.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  userName!: string;
  constructor(private subject: DesignUtiliesPrintService) {
    this.subject.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  user(val: any) {
    this.subject.userName.next(val.value);
  }
}

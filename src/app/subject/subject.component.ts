import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent {
  userName!: string;
  constructor(private ex: DesignUtiliesPrintService) {
    this.ex.userName.subscribe((res) => {
      this.userName = res;
    });
  }
  ngOnInit() {
    this.ex.exclusive.next(true);
  }
  ngOnDestroy() {
    this.ex.exclusive.next(false);
  }
}

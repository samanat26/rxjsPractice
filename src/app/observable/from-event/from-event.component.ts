import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtiliesPrintService } from '../service/design-utilies-print.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addbtn')
  addbtn!: ElementRef;
  constructor(private _design: DesignUtiliesPrintService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    let count = 1;

    fromEvent(this.addbtn.nativeElement, 'click').subscribe((res) => {
      let countval = 'video' + count++;
      console.log(countval);
      //print comes from service///
      this._design.print(countval, 'elContainer');
      this._design.print(countval, 'elContainer2');
    });
  }
}

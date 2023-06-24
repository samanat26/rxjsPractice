import { Component } from '@angular/core';
import { DesignUtiliesPrintService } from 'src/app/observable/service/design-utilies-print.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  exclusive: boolean = false;

  constructor(private ex: DesignUtiliesPrintService) {}
  ngOnInit() {
    this.ex.exclusive;
    // .next((res: boolean) => this.exclusive = res);
  }
}

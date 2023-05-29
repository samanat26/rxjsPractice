import { Component } from '@angular/core';
import { accordionData } from './array.component.data';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
})
export class ArrayComponent {
  data: any;

  ngOnInit() {
    this.data = accordionData;
  }
  moveUp(i: any) {
    if (i > 0) {
      let temp = this.data.faqs[i];
      this.data.faqs[i] = this.data.faqs[i - 1];
      this.data.faqs[i - 1] = temp;
    }
    // throw new Error('Method not implemented.');
  }

  moveDown(i: any) {
    if (i < this.data.faqs.length) {
      let temp = this.data.faqs[i];
      this.data.faqs[i] = this.data.faqs[i + 1];
      this.data.faqs[i + 1] = temp;
    }
    // throw new Error('Method not implemented.');
  }

  add(i: any) {
    throw new Error('Method not implemented.');
  }

  del(i: any) {
    throw new Error('Method not implemented.');
  }
}

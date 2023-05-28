import { Component } from '@angular/core';
import { accordionData } from "./array.component.data";

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {

data: any ;

ngOnInit(){
  this.data= accordionData ;
}
moveUp() {
throw new Error('Method not implemented.');
}

moveDown() {
  throw new Error('Method not implemented.');
  }

}

import { Component } from '@angular/core';
import { data } from '../data.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 value: any;


  constructor(){
    this.value = data;
  }
  ngOnInit(){
    console.log(this.value);
    
  }
}

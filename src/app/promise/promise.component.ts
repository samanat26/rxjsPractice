import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  constructor(){}
  ngOnInit(){}

  myfun(){
    console.log("my function called");
    
  }
}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent {

msgObj: any;
videoSub : sub

  constructor(){}
  ngOnInit(){
    const broadCastVideos = interval(1000); //this will run untill unsubscribe

    broadCastVideos.subscribe(res=>{
      // console.log(res);
      this.msgObj = "video" + res;
      
    })
  }

 



}

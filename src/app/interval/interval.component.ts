import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent {

msgObj: any;
  // videoSub: Subscription = new Subscription;
    videoSub !: Subscription;
  constructor(
    private _printService : DesignUtiliesPrintService
  ){
  }
  ngOnInit(){
    //this will run untill unsubscribe/////////
    // const broadCastVideos = interval(1000);
    
    //timer - it takes 2 arguments ///
    // timer (delay , interval)
    const broadCastVideos = timer(5000, 1000)


    this.videoSub = broadCastVideos.subscribe(res=>{
      // console.log(res);
      this.msgObj = "video" + res;
      this._printService.print(this.msgObj , "elContainer")
      this._printService.print(this.msgObj , "elContainer1")
      this._printService.print(this.msgObj , "elContainer2")
      

      if (res >=5 ){
        this.videoSub.unsubscribe()
      }
      
    })
  }


 



}

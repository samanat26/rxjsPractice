import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtiliesPrintService } from '../observable/service/design-utilies-print.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent {
  techStatus: any  ;

  constructor(
    private _design:DesignUtiliesPrintService
  ){}
  ngOnInit(){

    //Ex-01 (manual) emitted manually
    
    const cusObs1 = new Observable(
      observer=>{
        setTimeout(() => {
          observer.next('Angular')
          // observer.complete();
        }, 1000);
        setTimeout(() => {
          observer.next('React')
          // observer.complete();
        }, 2000);
        //once it completes never goes forward 
        setTimeout(() => {
          observer.next('Graphic Designer');
          observer.complete();
          this.techStatus = 'completed'
          
        }, 2000);
        
        setTimeout(() => {
          observer.next('Css , Html');
          observer.error('limit excced');
          this.techStatus = 'error';
        }, 3000);
      }
    )
    cusObs1.subscribe(
      res=>{
        // console.log(res);
        this._design.print(res,'elContainer')
        
      }
    )

    const cusObs2 = new Observable(
      obs =>{
        console.log(obs);
        
      }
    )

  }

}

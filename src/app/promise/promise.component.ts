import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  constructor(){}

//example of purchasing laptops
 
dell={
  "brand":"dell",
  "color": "black"
}
hp={
  "brand":"hp",
  "color": "silver"
}
notAvailable={
  status : false
}
 
dellAvailable(){
  return true;
}
hpAvailable(){
  return true;
}

promiseVal: any;


  ngOnInit(){
    let buyLaptop = new Promise ((resolve,reject)=>{
      // resolve ('promise resloved')
      // reject('promise is rejected')

      if (this.dellAvailable()){
        setTimeout(() => { 
          resolve(this.dell)
        }, 3000);
      }
      else if (this.hpAvailable()){
        setTimeout(()=>{
          resolve(this.hp)
        },3000);
      }
      else {
        setTimeout(()=>{
          reject(this.notAvailable)
        },3000)
      }

    });
    buyLaptop.then((response)=>{
      console.log("success",response);
      this.promiseVal=response;
    }).then((res)=>{
      console.log("reject",res);
      this.promiseVal=res;
    })
  }

  myfun(){
    // console.log("my function called");
  
  }

  
}

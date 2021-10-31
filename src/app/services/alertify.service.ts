import { Injectable } from '@angular/core';
declare let alertify:any; //3 parti yazımlar için declare etmek gerekiyor.

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.error(message)
  }

  warning(message:string){
    alertify.warning(message)
  }
}

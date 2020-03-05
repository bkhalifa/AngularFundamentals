import { Injectable } from '@angular/core';

declare let toastr

@Injectable()
export class ToastrService{


  Success(message:string , title:string){
    toastr.success(message, title)
  }

  Info(message:string , title:string){
    toastr.info(message, title)
  }
  Error(message:string , title:string){
    toastr.error(message, title)
  }
}

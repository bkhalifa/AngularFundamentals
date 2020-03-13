import { InjectionToken } from '@angular/core';
import { __exportStar } from 'tslib';



export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
  success(msg:string, title?:string):void;
  info(msg:string, title?:string):void;
  warning(msg:string, title?:string):void;
  error(msg:string, title?:string):void;
}
// @Injectable()
// export class ToastrService{
//   Success(message:string , title:string){
//     toastr.success(message, title)
//   }

//   Info(message:string , title:string){
//     toastr.info(message, title)
//   }
//   Error(message:string , title:string){
//     toastr.error(message, title)
//   }
// }

import { Component } from "@angular/core";
import {AuhtService}  from './auth.service'

@Component({
  templateUrl:'./login.component.html',
  styles:[`
  em { float:right; color:#e05c65; padding-left:10px }`
  ]
})
export class LoginComponent{

  constructor(private autservice :AuhtService){}
  userName:any
  password: any
  mouseaction:any


login(formValue){

    this.autservice.login(formValue.userName,formValue.passWord)

  }

}

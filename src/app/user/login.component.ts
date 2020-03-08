import { Component } from "@angular/core";
import {AuhtService}  from './auth.service'
import { NgForm } from "@angular/forms";

@Component({
  templateUrl:'./login.component.html'
})
export class LoginComponent{

  constructor(private autservice :AuhtService){}
  userName:any
  password: any



login(formValue){

    this.autservice.login(formValue.userName,formValue.passWord)

  }

}

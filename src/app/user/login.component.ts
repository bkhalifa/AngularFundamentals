import { Component } from "@angular/core";
import {AuhtService}  from './auth.service'
import { Router } from '@angular/router';

@Component({
  templateUrl:'./login.component.html',
  styles:[`
  em { float:right; color:#e05c65; padding-left:10px }`
  ]
})
export class LoginComponent{

  constructor(private autservice :AuhtService, private router:Router){}
  userName:string
  password: string
  mouseaction:any


login(formValue){

    this.autservice.login(formValue.userName,formValue.passWord)

  }

  cancel(){
     this.router.navigate(['events'])
  }
}

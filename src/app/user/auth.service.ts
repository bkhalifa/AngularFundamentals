import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class AuhtService{

currentUser:IUser

login(userName:string,passWord:string){

  this.currentUser = {
   id :1,
   firstName:'john',
   lastName:'papa',
   userName: userName
  }
  console.log(this.currentUser)
}

IsAuthenticated(){
  return !!this.currentUser
}
}

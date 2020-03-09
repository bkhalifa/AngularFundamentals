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
editProfile(firstName:string, lastName:string){
 this.currentUser.firstName = firstName
 this.currentUser.lastName = lastName
 console.log(`current user ${this.currentUser.firstName} ${this.currentUser.lastName}`)
}
}

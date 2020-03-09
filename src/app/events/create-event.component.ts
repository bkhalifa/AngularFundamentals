import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '.';
import { ISession } from './shared';


@Component({
  selector:'add-session',
 templateUrl:'./create-event.component.html',
 styles:[`
em {float:right; color:#e05c65; padding-left: 10px;}
.error input {background-color:#E3C3C5}
.error ::-webkit-input-placeholder {color:#999;}
.error ::-moz-placeholder {color:#999;}
.error :-moz-placeholder {color:#999;}
.error :ms-input-placeholder {color:#999;}
`]
})
export class CreateEventComponent {

  constructor(private eventServcie:EventService, private router :Router){}
  newEvent
  isDirty:boolean = true;

  @Output()
  notifySession = new EventEmitter<ISession>()
  @Output()
  notifyCancel  = new EventEmitter()

  cancel(){
     this.notifyCancel.emit(false)
   }


     saveEvent(newEventFormValue){
     this.eventServcie.saveEvent(newEventFormValue);
     this.isDirty = false
     this.router.navigate(['/events'])
     }

     saveSession(formValue){
       let session:ISession={
         id:undefined,
         name:formValue.name,
         duration:formValue.duration,
         level:formValue.duration,
         presenter:formValue.presenter,
         abstract:formValue.abstract,
         voters:[]

       }
       this.notifySession.emit(session)
     }
}

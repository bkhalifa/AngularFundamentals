import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '.';

@Component({
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
  cancel(){
      this.router.navigate(['/events'])
     }


     saveEvent(newEventFormValue){
     this.eventServcie.saveEvent(newEventFormValue);
     this.isDirty =false
     this.router.navigate(['/events'])
     }
}

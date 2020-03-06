import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'event-thumbnail',
  template:`
   <div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]">
    <h2>{{event?.name}} </h2>
    <div> Date: {{event?.date}} </div>
    <div [ngStyle]="getStartTimeStyle()"
      [ngSwitch] ="event?.time">
       Time : {{event?.time}}
       <span *ngSwitchCase="'8:00 am'"> Early Start </span>
       <span  *ngSwitchCase="'10:00 am'"> Late Start</span>
      <span  *ngSwitchDefault> Normal Start</span>
   </div>

    <div> Price: \${{event?.price}} </div>
    <div *ngIf="event?.location">
        <span>Location : {{event?.location?.adress}} </span>
        <span> &nbsp;</span>
        <span>{{event?.location?.city}}, {{event?.location?.country}} </span>

   </div>
<div>
  <div *ngIf="event?.onlineUrl">
  OnLine Url : {{event?.onlineUrl}}
  </div>
  `,
  styles : [`
  .thumbnail{min-height:210px}
  .pad-left {margin-left: 10px; }
  .well div {color:#bbb;},
  `
  ]
})

export class EventThumbnailComponent{
  @Input() event:any;
  @Output() eventClick = new EventEmitter();



  handleClickMe(id:number){
       this.eventClick.emit(id);
  }

  getStartTimeStyle(){
    if(this.event && this.event.time === '8:00 am')
      return {color:'#003300','font-weight':'bold'}
    return {};
  }


}

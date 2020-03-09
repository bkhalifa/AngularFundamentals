import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';



@Component({
  templateUrl:'./event-detail.component.html',
  styles:[ `
    a {cursor: pointer;}
  .container{padding-left:20px; padding-right:20px},
  .event-image{height: 100px;},

  `
  ]
})
export class EventDetailComponent implements OnInit{

  constructor(private eventService:EventService, private router :ActivatedRoute) {}
  event :IEvent
  addMode :boolean

@Output()
sessionEvent  : EventEmitter<ISession>


  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.router.snapshot.params['id'])
  }

  addSession(){
    this.addMode= true
  }

  saveNewSession(session:ISession){
  let nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id))
  session.id = nextId +1
  this.event.sessions.push(session)
  this.eventService.updateEvent(this.event);
  this.addMode = false
  }

  cancelAddMode(flag:false){

     this.addMode = flag
  }
}

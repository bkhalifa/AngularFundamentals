import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private eventService:EventService, private route :ActivatedRoute) {}
  event :IEvent
  addMode :boolean
 filterBy :string = 'all'
 sortBy :string ='votes'
@Output()
sessionEvent  : EventEmitter<ISession>


  ngOnInit(): void {
    this.route.params.forEach((params:Params)=>{
      this.event = this.eventService.getEvent(+params['id'])
    //   setup re initialize
      this.addMode=false
    })

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

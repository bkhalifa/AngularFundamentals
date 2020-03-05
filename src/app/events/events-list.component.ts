import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';



@Component({
  selector:'events-list',
  template:`
  <div>
  <h2> up coming angular Events </h2>
  <hr>
  <div class="row">
  <event-thumbnail  *ngFor="let event of events" [event]="event" class="col-md-5"
    (click)="diplayToastr(event.name)"> </event-thumbnail>
  </div>
 <hr>
 </div>
  `
})

export class EventListComponent implements OnInit{

  constructor(private eventService:EventService,private toastrService:ToastrService){}
  events :any[]

  ngOnInit(): void {
    this.events = this.eventService.getEvents()
  }

  checkThisOut(event:any){
    console.log(event)
  }

  diplayToastr(eventName){
    this.toastrService.Success(eventName,"");
  }



}

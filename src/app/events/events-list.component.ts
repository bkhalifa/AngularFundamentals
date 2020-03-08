import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
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

  constructor(private eventService:EventService,
              private toastrService:ToastrService,
              private route: ActivatedRoute){}
  events :IEvent[]

  ngOnInit(): void {
   this.events = this.route.snapshot.data['events']
  //  this.eventService.getEvents().subscribe(
  //    res =>{ this.events = res },
  //    err => console.error(err)
  //  )
  }

  checkThisOut(event:any){
    console.log(event)
  }

  diplayToastr(eventName){
    console.log('toastr');
    // this.toastrService.Success(eventName,"success");
    // this.toastrService.Info(eventName,"info");
    // this.toastrService.Error(eventName,"error");
  }



}

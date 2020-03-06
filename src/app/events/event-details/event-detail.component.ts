import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl:'./event-detail.component.html',
  styles:[ `
  .container{padding-left:20px; padding-right:20px},
  .event-image{height: 100px;}
  `
  ]
})
export class EventDetailComponent implements OnInit{

  constructor(private eventService:EventService, private router :ActivatedRoute) {}
  event :any

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.router.snapshot.params['id'])
  }


}

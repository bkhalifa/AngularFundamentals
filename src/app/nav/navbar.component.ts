import { Component, OnInit, Inject } from '@angular/core';
import { AuhtService } from '../user/auth.service';
import { EventService } from '../events';
import {map} from 'rxjs/operators'
import { inject } from '@angular/core/testing';
import { JQ_TOKEN } from '../common';

@Component({
  selector:'navbar',
  templateUrl:'./navbar.component.html',
  styles:[`
  .nav.navbar-nav {font-size: 15 px;}
  .navbar-nav {background-color: #485563;}
  #searchForm {margin-right: 100px}
  @media (max-width: 120px) {#searchForm{display:none}}
   a{color:#bbb}
  li > a.active {color: #F97924}
  `]
})
export class NavBarComponent {
searchTerm:string =""
searchResults:string =""
foundSessions :any[]
  constructor(private eventServices: EventService ,
            public authService :AuhtService,
            @Inject(JQ_TOKEN) private $: any){}

  SearchSessions(searchTerm){
  this.eventServices.searchSessions(searchTerm).subscribe(sessions=>{
    this.foundSessions = sessions,
  console.log(this.foundSessions)
 })
   }


}

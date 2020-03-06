import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService :EventService,
              private router:Router){}


  canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
  state: import("@angular/router").RouterStateSnapshot): boolean
   | import("@angular/router").UrlTree
   | import("rxjs").Observable<boolean
   | import("@angular/router").UrlTree>
   | Promise<boolean
   | import("@angular/router").UrlTree> {


    let existsEvent = !! this.eventService.getEvent(+ route.params['id']);

    if(!existsEvent)
        this.router.navigate(['/404']);

    return existsEvent
  }



}

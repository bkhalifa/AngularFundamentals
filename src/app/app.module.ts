import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailComponent } from './events/event-details/event-detail.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './error/error404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],

  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],

  providers:[EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide:'canDeactivateCreateEvent', useValue:canDeactivateCreateEvent
    },
    EventListResolverService

  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

export function canDeactivateCreateEvent(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('are you sure de cancel with out saving !');

    return true;
}

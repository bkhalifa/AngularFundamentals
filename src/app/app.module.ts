import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

import { EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouteActivatorService,
  SessionListComponent}
  from  './events/index'

  import {JQ_TOKEN, TOASTR_TOKEN, Toastr, SimpleModalComponent, ModalTriggerDirective }
  from './common/index'

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './error/error404.component';
import { AuhtService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';


 let toastr:Toastr = window['toastr']
 let jquery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective

  ],

  providers:[EventService,
    {provide:TOASTR_TOKEN,
     useValue:toastr},
     {
       provide:JQ_TOKEN,
       useValue:jquery
     },
    EventRouteActivatorService,
    AuhtService,
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

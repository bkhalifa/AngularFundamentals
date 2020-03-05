import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    BrowserModule

  ],

  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],

  providers:[EventService, ToastrService],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-details/event-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/error404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolverService }
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: '404',
    component: Error404Component
  },

  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
]

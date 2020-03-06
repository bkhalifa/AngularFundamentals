import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
   <navbar> </navbar>
  <router-outlet> </router-outlet>
  `
})
export class EventAppComponent {
  title = 'AngularFundamentals';
}

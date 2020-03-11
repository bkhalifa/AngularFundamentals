import { Component, Input } from "@angular/core";

@Component({
  selector:'collapsible-well',
  template:`
   <div (click)="toggleConent()" class="well pointable">
     <h4>
  {{title}}
   </h4>
      <ng-content *ngIf="isVisible" ></ng-content>

</div>
  `
})
export class CollapsibleWellComponent{
  @Input()
  title :string
  isVisible :boolean

  toggleConent(){
   this.isVisible = !this.isVisible
  }
}

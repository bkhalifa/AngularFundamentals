import { Component, Input, Inject, ViewChild, ElementRef } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'simple-modal',
  template: `
  <div id="{{elementId}}"  #modalContainer class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">{{title}}</h4>
          <button type="button" class="close"
          data-dismiss="modal"><span> &times;</span> </button>

       </div>
     <div class="modal-body"  (click)="closeModal()">
        <ng-content> </ng-content>
     </div>
  </div>
 </div>
</div>

  `,
  styles: [`
  .modal-body {height:250px; overflow-y:scroll}
  `]
})
export class SimpleModalComponent {
  constructor(@Inject(JQ_TOKEN) private $:any){}
  @Input() title: string
  @Input() elementId
  @Input() closeModalConfig:string
  @ViewChild('modalContainer') modalContainer:ElementRef
  closeModal(){
if(this.closeModalConfig ==="true"){
  this.$(this.modalContainer.nativeElement).modal('hide')
}
  //  this.$(this.modalContainer.nativeElement).modal('hide')
  }
}

import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from '.';

@Directive({
  selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
  el: HTMLElement
  @Input('modal-trigger') modelId:string
constructor(private ref : ElementRef,
           @Inject(JQ_TOKEN)private $: any){
  this.el = ref.nativeElement
}

  ngOnInit(): void {
    this.el.addEventListener('click',e => {
      this.$(`#${this.modelId}`).modal({})
    })

  }

}

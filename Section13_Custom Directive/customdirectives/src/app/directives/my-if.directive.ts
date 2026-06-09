import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(private templateRef:TemplateRef<any>, private container:ViewContainerRef) { }

  @Input() set myIf(condition:boolean){
    if(condition){
      this.container.createEmbeddedView(this.templateRef);
    }else{
      this.container.clear();
    }
  }

}

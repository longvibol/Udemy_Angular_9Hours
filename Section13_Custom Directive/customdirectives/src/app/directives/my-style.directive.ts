import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myStyles]'
})
export class MyStyleDirective {

  @Input() fontSize!:string;

  constructor(private elRef:ElementRef) { 
    elRef.nativeElement.style.color = "red";
    elRef.nativeElement.style.fontSize = "20px";
    elRef.nativeElement.style.backgroundColor = "yellow";
  }

  ngAfterViewInit(){
    this.elRef.nativeElement.style.fontSize = this.fontSize;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elRef.nativeElement.style.color = "blue";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elRef.nativeElement.style.color = "red";
  }
}

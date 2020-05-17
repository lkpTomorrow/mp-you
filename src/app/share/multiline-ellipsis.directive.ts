import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { toNumber } from 'ng-zorro-antd';

@Directive({
  selector: '[mpMultilineEllipsis]'
})
export class MultilineEllipsisDirective {

  constructor(
    private elRef:ElementRef,
    private renderer:Renderer2
  ) { }

  @Input() maxHeight = 80;
  @Input() lineHeght = 20;

  ngAfterViewInit(): void {
    const elDom = this.elRef.nativeElement;
    const elHeight = getComputedStyle(elDom,null).height.slice(0,-2);


    this.renderer.setStyle(elDom,'max-height',`${this.maxHeight}px`)
    this.renderer.setStyle(elDom,'line-height',`${this.lineHeght}px`);

    if(toNumber(elHeight,null)>this.maxHeight){
      this.renderer.addClass(elDom,'multiline-ellipsis');
    }
  }
}

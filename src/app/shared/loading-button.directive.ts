import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[lprLoadingButton]'
})
export class LoadingButtonDirective implements OnChanges {

  @Input('lprLoadingButton')
  loading: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges() {
    if (this.loading) {
      this.renderer.addClass(this.el.nativeElement, 'lpr-loading-button');
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'lpr-loading-button');
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }

}

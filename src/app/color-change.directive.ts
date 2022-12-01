import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = this.getNewColor();
  }
  getNewColor() {
    return `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
  }
  @HostListener('mouseenter') funOne() {
    this.element.nativeElement.style.backgroundColor = this.getNewColor();
  }
  @HostListener('mouseleave') funTwo() {
    this.element.nativeElement.style.backgroundColor = this.getNewColor();
  }
}

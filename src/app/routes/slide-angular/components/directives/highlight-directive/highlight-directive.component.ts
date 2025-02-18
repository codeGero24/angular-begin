import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-highlight-directive',
  templateUrl: './highlight-directive.component.html',
  styleUrls: ['./highlight-directive.component.scss'],
})
export class HighlightDirectiveComponent {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

import { Component, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() navLinks: Array<Route> | undefined;
  @Input() subMenu: Array<Route> | undefined;

  timedOutCloser: any;
  isDesktop: boolean = false;
  isMobile: boolean = false;

  constructor() {
    this.isDesktop = window.innerWidth >= 988;
    this.isMobile = window.innerWidth < 988;
    this.handleResize();
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 988;
      this.isMobile = window.innerWidth < 988;
    });
  }

  mouseEnter(trigger: MatMenuTrigger) {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu();
  }

  mouseLeave(trigger: MatMenuTrigger) {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }
}

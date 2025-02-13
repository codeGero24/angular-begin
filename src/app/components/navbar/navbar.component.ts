import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() navLinks: Array<Route> | undefined;
  @Input() subMenu: Array<Route> | undefined;

  isDesktop: boolean = false;
  isMobile: boolean = false;

  constructor(private router: Router) {
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

  goTo(path: string) {
    this.router.navigate([path]);
  }
}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouteConfig, routes } from 'src/app/app-routing.module';
// - import { NavbarServiceService } from './services/navbar-service.service';

@Component({
  selector: 'app-slide-angular',
  templateUrl: './slide-angular.component.html',
  styleUrls: ['./slide-angular.component.scss'],
})
export class SlideAngularComponent implements OnInit {
  components?: RouteConfig[] = [];
  showCourses: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute // - public navbarService: NavbarServiceService
  ) {}

  private hiddenCourses() {
    this.showCourses = this.router.url === '/slide-angular';
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urls = [...event?.url?.split('/')].filter(Boolean);
        this.showCourses = urls.length <= 1;
      }
    });
  }

  private getCourses() {
    this.components = routes
      .find((route) => route.path === 'slide-angular')
      ?.children?.map((component) => ({
        image: 'assets/img/angular-logo.svg',
        ...component,
      }));
  }

  ngOnInit(): void {
    this.hiddenCourses();
    this.getCourses();
  }
}

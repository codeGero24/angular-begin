import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { debounceTime, fromEvent, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() navLinks: Array<Route> | undefined;
  @Input() subMenu: Array<Route> | undefined;

  timedOutCloser: any;
  queryParam: string | null = null;
  isDesktop: boolean = window.innerWidth >= 988;
  isMobile: boolean = window.innerWidth < 988;
  private resizeSubscription: Subscription | null = null;
  private routeSubscription: Subscription | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(200)) // Evita troppi eventi
      .subscribe(() => {
        this.isDesktop = window.innerWidth >= 988;
        this.isMobile = window.innerWidth < 988;
      });

    // ------------------------------------
    // - Accedere ai Parametri di rotta
    // ------------------------------------
    // - const id = this.route.snapshot.params?.id;
    // - const queryParams = this.route.snapshot.queryParams?.q;
    // - const allRouteParams = this.route.snapshot.queryParamMap;
    // ------------------------------------
    // - Observable Subscribe Params
    // ------------------------------------
    this.routeSubscription = this.route.queryParamMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.queryParam = params.get('q');
          return [params];
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
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

  navigateTo({ path, qp }: { path: string; qp?: object }) {
    // ------------------------
    // - Parametri di rotta
    // ------------------------
    // - Type - Path: { path: 'product/:id', component: ProductComponent }
    // - Output: '/product/:id'

    // - Type - Query: { path: 'search', component: SearchComponent }
    // - Output:'/search?q=${value}'
    // - Note: [In Angular, i query param non vengono aggiornati automaticamente se non si cambia rotta.]

    // - Type - Matrice:  { path: 'user/:id[/:category]', component: UserComponent }
    // - Output: '/user/123/profile'
    const navigateConfig = qp ? { queryParams: qp } : {};
    this.router.navigate([path, navigateConfig]);
  }
}

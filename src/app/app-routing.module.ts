import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';
import { SlideAngularComponent } from '@routes/slide-angular/slide-angular.component';
import { TourOfHeroesComponent } from '@routes/tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from '@routes/tour-of-heroes/components/dashboard/dashboard.component';
import { HeroesComponent } from '@routes/tour-of-heroes/components/heroes/heroes.component';
import { HeroDetailComponent } from '@routes/tour-of-heroes/components/hero-detail/hero-detail.component';
import { CounterComponent } from '@components/counter/counter.component';
import { InputNameComponent } from '@routes/slide-angular/components/input-name/input-name.component';
import { ObservablesComponent } from '@routes/slide-angular/components/observables/observables.component';
import { EventManagerComponent } from '@routes/slide-angular/components/event-manager/event-manager.component';
import { ParentComponent } from '@routes/slide-angular/components/parent/parent.component';
import { UserListComponent } from '@routes/slide-angular/components/user-list/user-list.component';
import { DirectivesComponent } from '@routes/slide-angular/components/directives/directives.component';
import { ReactiveFormComponent } from '@routes/slide-angular/components/reactive-form/reactive-form.component';

export interface RouteConfig extends Route {
  path?: string;
  title?: string;
  image?: string;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  { title: 'Home', path: '', component: HomeComponent },
  {
    title: 'Slide Angular',
    path: 'slide-angular',
    component: SlideAngularComponent,
    children: [
      {
        title: 'Counter',
        path: 'counter',
        image: 'assets/img/counter.png',
        component: CounterComponent,
      },
      {
        title: 'Simple Input',
        image: 'assets/img/simple-input.png',
        path: 'simple-input',
        component: InputNameComponent,
      },
      {
        title: 'Parent & Child',
        image: 'assets/img/parent-child.png',
        path: 'parent-child',
        component: ParentComponent,
      },
      {
        title: 'EventManager',
        image: 'assets/img/eventmanager.png',
        path: 'eventmanager',
        component: EventManagerComponent,
      },
      {
        title: 'Observable',
        path: 'observable',
        component: ObservablesComponent,
      },
      {
        title: 'Fetch Api by MyService',
        path: 'fetch-users',
        component: UserListComponent,
      },
      {
        title: 'Forms: Template diven, Reactive, and  Dynamic',
        path: 'forms',
        component: ReactiveFormComponent,
      },
      {
        title: 'Directive & Transform pipes',
        path: 'directive-pipes',
        component: DirectivesComponent,
      },
    ],
  },
  {
    title: 'Tutorial',
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
    children: [
      { title: 'Dashboard', path: '', component: DashboardComponent },
      { title: 'Heroes', path: 'heroes', component: HeroesComponent },
      {
        path: 'detail/:id',
        component: HeroDetailComponent,
      },
    ],
  },
  // -  { path: '**', component: PageNotFoundComponent } - page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';
import { SlideAngularComponent } from '@routes/slide-angular/slide-angular.component';
import { TourOfHeroesComponent } from '@routes/tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from '@routes/tour-of-heroes/components/dashboard/dashboard.component';
import { HeroesComponent } from '@routes/tour-of-heroes/components/heroes/heroes.component';
import { HeroDetailComponent } from '@routes/tour-of-heroes/components/hero-detail/hero-detail.component';

export const routes: Routes = [
  { title: 'Home', path: '', component: HomeComponent },
  {
    title: 'Slide Angular',
    path: 'slide-angular',
    component: SlideAngularComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

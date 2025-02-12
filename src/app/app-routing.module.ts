import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@routes/home/home.component';
import { SlideAngularComponent } from '@routes/slide-angular/slide-angular.component';
import { TourOfHeroesComponent } from '@routes/tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from '@routes/tour-of-heroes/components/dashboard/dashboard.component';
import { HeroesComponent } from '@routes/tour-of-heroes/components/heroes/heroes.component';
import { HeroDetailComponent } from '@routes/tour-of-heroes/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'slide-angular', component: SlideAngularComponent },
  {
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

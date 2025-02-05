import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterComponent } from '@components/counter/counter.component';

import { InputNameComponent } from '@routes/slide-angular/input-name/input-name.component';
import { ParentComponent } from '@routes/slide-angular/parent/parent.component';
import { ChildComponent } from '@routes/slide-angular/child/child.component';
import { EventManagerComponent } from '@routes/slide-angular/event-manager/event-manager.component';
import { HomeComponent } from '@routes/home/home.component';
import { SlideAngularComponent } from '@routes/slide-angular/slide-angular.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TourOfHeroesComponent } from '@routes/tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from '@routes/tour-of-heroes/dashboard/dashboard.component';
import { HeroesComponent } from '@routes/tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent } from '@routes/tour-of-heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from '@routes/tour-of-heroes/messages/messages.component';
import { HeroSearchComponent } from '@routes/tour-of-heroes/hero-search/hero-search.component';

import { InMemoryDataService } from '@services/hero/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    InputNameComponent,
    ParentComponent,
    ChildComponent,
    EventManagerComponent,
    HomeComponent,
    SlideAngularComponent,
    NavbarComponent,
    TourOfHeroesComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

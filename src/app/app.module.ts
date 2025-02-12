import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// - import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// - Common - components
import { HomeComponent } from '@routes/home/home.component';
import { CounterComponent } from '@components/counter/counter.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
// - slide-angular - components
import { InputNameComponent } from '@routes/slide-angular/components/input-name/input-name.component';
import { ParentComponent } from '@routes/slide-angular/components/parent/parent.component';
import { ChildComponent } from '@routes/slide-angular/components/child/child.component';
import { EventManagerComponent } from '@routes/slide-angular/components/event-manager/event-manager.component';
import { SlideAngularComponent } from '@routes/slide-angular/slide-angular.component';
import { UserListComponent } from './routes/slide-angular/components/user-list/user-list.component';
import { ObservablesComponent } from '@routes/slide-angular/components/observables/observables.component';
import { ReactiveFormComponent } from '@routes/slide-angular/components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from '@routes/slide-angular/components/template-driven-form/template-driven-form.component';
// - slide-angular - services
import { MyService } from '@routes/slide-angular/services/my.service';
import { MyInterceptor } from '@routes/slide-angular/services/interceptor/my.interceptor';
import { AuthInterceptor } from '@routes/slide-angular/services/interceptor/auth.interceptor';
import { TokenRefreshInterceptor } from '@routes/slide-angular/services/interceptor/token-refresh.interceptor';
// - tour-of-heroes - components
import { TourOfHeroesComponent } from '@routes/tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from '@routes/tour-of-heroes/components/dashboard/dashboard.component';
import { HeroesComponent } from '@routes/tour-of-heroes/components/heroes/heroes.component';
import { HeroDetailComponent } from '@routes/tour-of-heroes/components/hero-detail/hero-detail.component';
import { MessagesComponent } from '@routes/tour-of-heroes/components/messages/messages.component';
import { HeroSearchComponent } from '@routes/tour-of-heroes/components/hero-search/hero-search.component';
import { DinamicFormComponent } from './routes/slide-angular/components/dinamic-form/dinamic-form.component';
// - tour-of-heroes - services
// - import { InMemoryDataService } from '@routes/tour-of-heroes/services/in-memory-data.service';

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
    UserListComponent,
    ObservablesComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    DinamicFormComponent,
  ],
  imports: [
    FormsModule, // 👈 Importa FormsModule per Template-Driven Forms
    // - ReactiveFormsModule, // 👈 Importa ReactiveFormsModule per Reactive Forms
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    */
  ],
  providers: [
    MyService, // - declare here or by @Injectable({ providedIn: 'root' })
    // - Interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenRefreshInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

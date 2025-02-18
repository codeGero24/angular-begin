import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
// - import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// - Common - components
import { HomeComponent } from '@routes/home/home.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { RegisterIconsComponent } from './components/register-icons/register-icons.component';
import { CounterComponent } from '@components/counter/counter.component';
import { CourseCardComponent } from '@components/course-card/course-card.component';
// - slide-angular - components
import { SlideAngularComponent } from '@routes/slide-angular/slide-angular.component';
import { InputNameComponent } from '@routes/slide-angular/components/input-name/input-name.component';
import { ParentComponent } from '@routes/slide-angular/components/parent/parent.component';
import { ChildComponent } from '@routes/slide-angular/components/child/child.component';
import { EventManagerComponent } from '@routes/slide-angular/components/event-manager/event-manager.component';
import { UserListComponent } from './routes/slide-angular/components/user-list/user-list.component';
import { ObservablesComponent } from '@routes/slide-angular/components/observables/observables.component';
// - slide-angular - components - forms
import { ReactiveFormComponent } from '@routes/slide-angular/components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from '@routes/slide-angular/components/template-driven-form/template-driven-form.component';
import { DynamicFormComponent } from '@routes/slide-angular/components/dynamic-form/dynamic-form.component';
// - slide-angular - components - directives
import { DirectivesComponent } from '@routes/slide-angular/components/directives/directives.component';
import { PanelComponent } from '@routes/slide-angular/components/directives/panel/panel.component';
import { MessageComponent } from '@routes/slide-angular/components/directives/message/message.component';
import { AddressBookComponent } from '@routes/slide-angular/components/directives/address-book/address-book.component';
import { DatePipeComponent } from '@routes/slide-angular/components/directives/date-pipe/date-pipe.component';
import { CurrencyPipeComponent } from '@routes/slide-angular/components/directives/currency-pipe/currency-pipe.component';

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
// - tour-of-heroes - services
// - import { InMemoryDataService } from '@routes/tour-of-heroes/services/in-memory-data.service';

// - Angular Matirial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { NgTemplateComponent } from './routes/slide-angular/components/directives/ng-template/ng-template.component';
import { HighlightDirectiveComponent } from './routes/slide-angular/components/directives/highlight-directive/highlight-directive.component';
// - Pipes
import { PhonePipePipe } from './routes/slide-angular/pipe/phone-pipe.pipe';
import { UppercasePipe } from './routes/slide-angular/pipe/uppercase-pipe.pipe';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';

/* - Per usare Multilingua devo utilizzare Angular 16+
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.josn');
}
*/

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
    DynamicFormComponent,
    DirectivesComponent,
    PanelComponent,
    MessageComponent,
    AddressBookComponent,
    DatePipeComponent,
    CurrencyPipeComponent,
    RegisterIconsComponent,
    CourseCardComponent,
    NgTemplateComponent,
    HighlightDirectiveComponent,
    PhonePipePipe,
    UppercasePipe,
    LanguageSwitchComponent,
  ],
  imports: [
    // - FormsModule, // 👈 Importa FormsModule per Template-Driven Forms
    ReactiveFormsModule, // 👈 Importa ReactiveFormsModule per Reactive Forms and Dynamic
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    /* - The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        and returns simulated server responses.
        Remove it when a real server is ready to receive requests.
    
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    */
    // - Angular Matirial
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    /* - Translate Module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    */
  ],
  providers: [
    DatePipe,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selector: 'app-home' = 'app-home';

  title = 'angular-begin';
  founder = 'Calogero';
  /*
  constructor(private translateService: TranslateService){
    // - Importa lingua di default
    translateService.setDefaultLang('en')
  }
  */
}

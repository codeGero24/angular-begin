import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  // - constructor(private translateService: TranslateService){}

  changeLanguage(event: Event) {
    // - const language = (event.target as HTMLSelectElement).value;
    // - this.translateService.use(language)
  }
}

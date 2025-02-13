import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register-icons',
  templateUrl: './register-icons.component.html',
  styleUrls: ['./register-icons.component.scss'],
})
export class RegisterIconsComponent {
  icons = [
    {
      name: 'angular-logo',
      path: 'assets/img/angular-logo.svg',
    },
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons() {
    this.icons.forEach((icon) =>
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    );
  }
}

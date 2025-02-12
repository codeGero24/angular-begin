import { Component } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
})
export class InputNameComponent {
  selector: 'app-input-name' = 'app-input-name';
  name: string = '';

  // - Remove if: /src/app/angular.json -> import {FormsModule} and insert inside "imports"
  onChangeInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.name = target.value;
    }
  }
}

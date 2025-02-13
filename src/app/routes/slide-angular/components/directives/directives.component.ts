import { Component } from '@angular/core';
import { DIRECTIVES } from '@mock/mock-directives';

type directives = [string, { name: string; description: string }[]][];

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  directives = DIRECTIVES as directives;

  isArray(arr: Array<any> | string): boolean {
    return Array.isArray(arr);
  }
}

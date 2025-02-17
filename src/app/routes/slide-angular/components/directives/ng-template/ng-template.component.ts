import { Component } from '@angular/core';

type people = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss'],
})
export class NgTemplateComponent {
  people: people | null = null;

  addNumber() {
    this.people = {
      title: 'My name is Calogero',
      description: 'professioni: Fe Developer',
    };
  }
}

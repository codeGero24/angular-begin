import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.html',
  styleUrls: ['./tour-of-heroes.component.scss'],
})
export class TourOfHeroesComponent {
  selector: 'app-tour-of-heroes' = 'app-tour-of-heroes';
  title:string = 'Tour of Heroes'

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '@routes/slide-angular/services/navbar-service.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count: number = 0;

  constructor(private navbarService: NavbarServiceService) {}

  ngOnInit(): void {
    this.navbarService.showContent$.next(false);
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}

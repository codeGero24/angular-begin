import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() headline!: string | undefined;
  @Input() title!: string | undefined;
  @Input() description!: string | undefined;
  @Input() image!: string | undefined;
  @Input() routerLink!: string | undefined;

  ngOnInit(): void {
    this.image ||= 'assets/img/angular-logo.svg';
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() headline!: string | undefined;
  @Input() title!: string | undefined;
  @Input() description!: string | undefined;
  @Input() image!: string | undefined;
  @Input() routerLink!: string | undefined;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAngularComponent } from './slide-angular.component';

describe('SlideAngularComponent', () => {
  let component: SlideAngularComponent;
  let fixture: ComponentFixture<SlideAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

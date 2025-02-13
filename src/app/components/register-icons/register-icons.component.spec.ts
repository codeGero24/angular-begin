import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIconsComponent } from './register-icons.component';

describe('RegisterIconsComponent', () => {
  let component: RegisterIconsComponent;
  let fixture: ComponentFixture<RegisterIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

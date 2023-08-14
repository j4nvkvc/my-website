import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteVerificationComponent } from './route-verification.component';

describe('RouteVerificationComponent', () => {
  let component: RouteVerificationComponent;
  let fixture: ComponentFixture<RouteVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteVerificationComponent]
    });
    fixture = TestBed.createComponent(RouteVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

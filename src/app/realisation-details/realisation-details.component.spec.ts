import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationDetailsComponent } from './realisation-details.component';

describe('RealisationDetailsComponent', () => {
  let component: RealisationDetailsComponent;
  let fixture: ComponentFixture<RealisationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationDetailsComponent]
    });
    fixture = TestBed.createComponent(RealisationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

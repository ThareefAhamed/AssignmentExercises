import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberValidateComponent } from './mobile-number-validate.component';

describe('MobileNumberValidateComponent', () => {
  let component: MobileNumberValidateComponent;
  let fixture: ComponentFixture<MobileNumberValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNumberValidateComponent]
    });
    fixture = TestBed.createComponent(MobileNumberValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

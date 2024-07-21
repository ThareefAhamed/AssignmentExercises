import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCheckingComponent } from './name-checking.component';

describe('NameCheckingComponent', () => {
  let component: NameCheckingComponent;
  let fixture: ComponentFixture<NameCheckingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameCheckingComponent]
    });
    fixture = TestBed.createComponent(NameCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

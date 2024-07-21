import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentObjectComponent } from './student-object.component';

describe('StudentObjectComponent', () => {
  let component: StudentObjectComponent;
  let fixture: ComponentFixture<StudentObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentObjectComponent]
    });
    fixture = TestBed.createComponent(StudentObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

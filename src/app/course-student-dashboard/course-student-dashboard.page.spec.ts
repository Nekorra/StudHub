import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseStudentDashboardPage } from './course-student-dashboard.page';

describe('CourseStudentDashboardPage', () => {
  let component: CourseStudentDashboardPage;
  let fixture: ComponentFixture<CourseStudentDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseStudentDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

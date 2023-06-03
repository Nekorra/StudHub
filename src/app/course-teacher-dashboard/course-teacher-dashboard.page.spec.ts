import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseTeacherDashboardPage } from './course-teacher-dashboard.page';

describe('CourseTeacherDashboardPage', () => {
  let component: CourseTeacherDashboardPage;
  let fixture: ComponentFixture<CourseTeacherDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseTeacherDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

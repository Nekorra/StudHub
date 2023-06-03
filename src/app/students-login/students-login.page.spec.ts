import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsLoginPage } from './students-login.page';

describe('StudentsLoginPage', () => {
  let component: StudentsLoginPage;
  let fixture: ComponentFixture<StudentsLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentsLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

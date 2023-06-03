import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeachersLoginPage } from './teachers-login.page';

describe('TeachersLoginPage', () => {
  let component: TeachersLoginPage;
  let fixture: ComponentFixture<TeachersLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeachersLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

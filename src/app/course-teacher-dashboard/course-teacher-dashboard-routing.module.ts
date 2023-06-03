import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseTeacherDashboardPage } from './course-teacher-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CourseTeacherDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseTeacherDashboardPageRoutingModule {}

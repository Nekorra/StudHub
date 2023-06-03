import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseStudentDashboardPage } from './course-student-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CourseStudentDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseStudentDashboardPageRoutingModule {}

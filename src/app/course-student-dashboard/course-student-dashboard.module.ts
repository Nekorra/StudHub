import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseStudentDashboardPageRoutingModule } from './course-student-dashboard-routing.module';

import { CourseStudentDashboardPage } from './course-student-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseStudentDashboardPageRoutingModule
  ],
  declarations: [CourseStudentDashboardPage]
})
export class CourseStudentDashboardPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseTeacherDashboardPageRoutingModule } from './course-teacher-dashboard-routing.module';

import { CourseTeacherDashboardPage } from './course-teacher-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseTeacherDashboardPageRoutingModule
  ],
  declarations: [CourseTeacherDashboardPage]
})
export class CourseTeacherDashboardPageModule {}

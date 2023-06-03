import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'teachers-login',
    loadChildren: () => import('./teachers-login/teachers-login.module').then( m => m.TeachersLoginPageModule)
  },
  {
    path: 'students-login',
    loadChildren: () => import('./students-login/students-login.module').then( m => m.StudentsLoginPageModule)
  },
  {
    path: 'teacher-dashboard',
    loadChildren: () => import('./teacher-dashboard/teacher-dashboard.module').then( m => m.TeacherDashboardPageModule)
  },
  {
    path: 'course-teacher-dashboard',
    loadChildren: () => import('./course-teacher-dashboard/course-teacher-dashboard.module').then( m => m.CourseTeacherDashboardPageModule)
  },
  {
    path: 'student-dashboard',
    loadChildren: () => import('./student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule)
  },
  {
    path: 'course-student-dashboard',
    loadChildren: () => import('./course-student-dashboard/course-student-dashboard.module').then( m => m.CourseStudentDashboardPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

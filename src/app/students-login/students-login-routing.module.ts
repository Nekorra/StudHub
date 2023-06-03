import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsLoginPage } from './students-login.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsLoginPageRoutingModule {}

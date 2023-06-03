import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersLoginPage } from './teachers-login.page';

const routes: Routes = [
  {
    path: '',
    component: TeachersLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersLoginPageRoutingModule {}

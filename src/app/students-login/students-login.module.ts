import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsLoginPageRoutingModule } from './students-login-routing.module';

import { StudentsLoginPage } from './students-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsLoginPageRoutingModule
  ],
  declarations: [StudentsLoginPage]
})
export class StudentsLoginPageModule {}

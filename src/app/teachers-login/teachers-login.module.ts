import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersLoginPageRoutingModule } from './teachers-login-routing.module';

import { TeachersLoginPage } from './teachers-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachersLoginPageRoutingModule
  ],
  declarations: [TeachersLoginPage]
})
export class TeachersLoginPageModule {}

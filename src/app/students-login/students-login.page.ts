import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-login',
  templateUrl: './students-login.page.html',
  styleUrls: ['./students-login.page.scss'],
})
export class StudentsLoginPage implements OnInit {
  front: any;
  loginEmail: any;
  loginPassword: any;
  registerName: any;
  registerEmail: any;
  registerPassword: any;

  constructor(
    private authService: AuthenticationService,
    private loadingController: LoadingController,
		private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.front = true;
  }

  toggleRegister(page: any) {
    if (page == 'front') {
      this.front = true;
    }
    if (page == 'back') {
      this.front = false;
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.login(this.loginEmail, this.loginPassword).then(async (data) => {
      console.log(data);
      loading.dismiss();
      this.router.navigate(["/student-dashboard"])
    }).catch(async (err) => {
      loading.dismiss();
      let toast = await this.toastController.create({
        message: `Cannot sign-up an account. ${err.message}`,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

    });
  } 


  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
    console.log(this.registerEmail, this.registerName, this.registerPassword)
    await this.authService.register(this.registerEmail, this.registerPassword, this.registerName, "student").then(async (data:any) => {
      loading.dismiss()
      this.router.navigate(["/home"])
    }).catch(async (err: any) => {
      loading.dismiss();
      let toast = await this.toastController.create({
        message: `Cannot sign-up an account. ${err.message}`,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();

    });

    
  }

}



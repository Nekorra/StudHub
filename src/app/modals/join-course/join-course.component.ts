import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CourseService } from 'src/app/services/course.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-join-course',
  templateUrl: './join-course.component.html',
  styleUrls: ['./join-course.component.scss'],
})
export class JoinCourseComponent  implements OnInit {
  userId: any;
  joinCode: any;  
  genre: any;

  constructor(
    private modalCtrl: ModalController,
    private courseService: CourseService,
    private authService: AuthenticationService,
    private loadingController: LoadingController,
		private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  async dismissModal() {
    
    this.modalCtrl.dismiss();
    
  }

  async joinCourse() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.courseService.joinCourse(this.genre, this.joinCode, this.userId).then((res: any) => {
      loading.dismiss();
      this.dismissModal();
    }).catch(async (err: any) => {
      loading.dismiss();
      let toast = await this.toastController.create({
        message: `Cannot sign-up an account. ${err.message}`,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })
  }

  async getUser() {
    await this.authService.getUser().then((data: any) => {
      console.log(data);
      this.userId = data.uid;
    })
  } 

  optionsFn(event: any) {
    this.genre = event.detail.value;
  }

}

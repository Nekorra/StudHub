import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CourseService } from 'src/app/services/course.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent  implements OnInit {
  genre: any;
  courseName: any;
  userId: any;
  joinCode: any;
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

  async addCourse() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.joinCode = Math.floor(100000 + Math.random() * 900000);
    console.log(this.joinCode);
    this.courseService.addCourse(this.genre, this.courseName, this.userId, this.joinCode.toString()).then((res: any) => {
      loading.dismiss();
      this.dismissModal();
    }).catch(async (err: any) => {
      loading.dismiss();
      let toast = await this.toastController.create({
        message: `${err.message}`,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })
  }

  optionsFn(event: any) {
    this.genre = event.detail.value;
  }

  async getUser() {
    await this.authService.getUser().then((data: any) => {
    console.log(data);
    this.userId = data.uid;
    })
  } 


}

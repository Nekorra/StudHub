import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-course-teacher-dashboard',
  templateUrl: './course-teacher-dashboard.page.html',
  styleUrls: ['./course-teacher-dashboard.page.scss'],
})
export class CourseTeacherDashboardPage implements OnInit {
  data: any;
  courseData: any;
  file: any;
  notes: any;
  fileName: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private courseService: CourseService,
    private storage: AngularFireStorage,
    private loadingController: LoadingController,
		private alertController: AlertController,
    private toastController: ToastController,
  ) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const receivedData = navigation.extras.state;
      this.data = receivedData
      console.log("test: ", this.data)
    }
    this.getCourseData(this.data);
  }

  ngOnInit() {
  }

  getCourseData(data: any) {
    console.log(data)
    this.courseService.getCourseData(data.genre, data.joinCode).then((data: any) => {
      this.courseData = data;
      this.notes = data.notes;
      console.log(this.notes);
    });
  } 

 

  async onFileChange(event: any) {
    const loading = await this.loadingController.create();
    await loading.present();
    const file = event.target.files[0]
    if (file) {
      let path = `${this.courseData.genre}/${this.courseData.joinCode}/${file.name}`
      let uploadTask = await this.storage.upload(path, file);
      path = `${this.courseData.genre}/all-files/${file.name}`;
      uploadTask = await this.storage.upload(path, file);
      this.file = await uploadTask.ref.getDownloadURL();
      console.log(this.courseData.genre, this.courseData.joinCode, this.file)
      this.courseService.postNotes(this.courseData.genre, this.courseData.joinCode, this.file, this.fileName).then(async (data) => {
        loading.dismiss();
        let toast = await this.toastController.create({
          message: `uploaded notes!`,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.getCourseData(this.data);
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

}

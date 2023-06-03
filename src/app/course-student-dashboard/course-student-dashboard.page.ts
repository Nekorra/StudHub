import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-course-student-dashboard',
  templateUrl: './course-student-dashboard.page.html',
  styleUrls: ['./course-student-dashboard.page.scss'],
})
export class CourseStudentDashboardPage implements OnInit {
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
    private http: HttpClient
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const receivedData = navigation.extras.state['data'];
      this.data = receivedData
      console.log("test: ", this.data)
    }
    this.getCourseData(this.data);
  }

  getCourseData(data: any) {
    console.log(data)
    this.courseService.getCourseData(data.genre, data.joinCode).then((data: any) => {
      this.courseData = data;
      this.notes = data.notes;
      console.log(this.notes);
    });
  } 
  
  async getData(pdf: string) {
    console.log(pdf);
    let formData = new FormData();
    formData.append('pdf', pdf);
    const loading = await this.loadingController.create();
    await loading.present();
    this.http.post('http://34.125.108.223:3003/pdf', formData, {responseType: 'text'}).subscribe((res: any) => {
      console.log('POST request successful:', res);
      this.router.navigate(['/chatbot']);
      loading.dismiss();

    }),
    (error: any) => {
      loading.dismiss();
      async (error: any) => {
        loading.dismiss();
        let toast = await this.toastController.create({
          message: `${error.message}`,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();

      }

    }

  }


}

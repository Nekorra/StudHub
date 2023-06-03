import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JoinCourseComponent } from '../modals/join-course/join-course.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router, NavigationExtras  } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {
  courses: any[] = [];
  courseData: any[] = [];
  userId: any;
  userData: any;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthenticationService,
    private router: Router,
    private courseService: CourseService,

  ) { }

  ngOnInit() {
  
  }

  ionViewWillEnter() {
    this.courseData = [];
    this.courses = [];
    this.getCourses();
  }
  
  async openModal() {
    console.log("test")
    const modal = await this.modalCtrl.create({
      component: JoinCourseComponent,
      componentProps: { 
        
      }
    });
    modal.onDidDismiss().then((data) => {
      this.getCourses();
    })
    await modal.present();
  }

  
  async getCourses() {
    this.courseData = [];
    this.courses = [];
    await this.authService.getUser().then((data: any) => {
      console.log(data);
      this.userId = data.uid;
    })
    this.userData = await this.authService.getUserData("student", this.userId);
    console.log(this.userData); 
    this.courses = this.userData.courses;
    for(let i = 0; i < this.courses.length; i++) {
      this.courseService.getCourseData(this.courses[i].genre, this.courses[i].joinCode).then((data: any) =>{
        this.courseData.push(data);
      })
    }
  };

  navigateToCourse(index: any) {
    const dataToSend = {
      genre: this.courseData[index].genre,
      joinCode: this.courseData[index].joinCode,
    };
  
    const navigationExtras: NavigationExtras = {
      state: {
        data: dataToSend
      }
    };
  
    this.router.navigate(['/course-student-dashboard'], navigationExtras);
  }

}

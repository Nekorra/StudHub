import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCourseComponent } from '../modals/add-course/add-course.component';
import { CourseService } from '../services/course.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router, NavigationExtras  } from '@angular/router';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.page.html',
  styleUrls: ['./teacher-dashboard.page.scss'],
})
export class TeacherDashboardPage implements OnInit {
  courses: any[] = [];
  courseData: any[] = [];
  userId: any;
  userData: any;

  constructor(
    private modalCtrl: ModalController,
    private courseService: CourseService,
    private authService: AuthenticationService,
    private router: Router
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
      component: AddCourseComponent,
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
    this.userData = await this.authService.getUserData("teacher", this.userId);
    console.log(this.userData); 
    this.courses = this.userData.courses;
    for(let i = 0; i < this.courses.length; i++) {
      this.courseService.getCourseData(this.courses[i].genre, this.courses[i].joinCode).then((data: any) =>{
        this.courseData.push(data);
      })
    }
  };

  navigateToCourse(index: any) {
    this.router.navigate(["./course-teacher-dashboard"], { state: {genre: this.courseData[index].genre, joinCode: this.courseData[index].joinCode}});
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { arrayUnion } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private af: AngularFirestore, 
    private afAuth: AngularFireAuth,
    private authService: AuthenticationService,
  ) {}
  
  addCourse(genre: any, name: any, userId: any, joinCode: any) {
    this.af.collection('courses').doc('courses').collection(genre).doc(joinCode).set({
      name: name,
      students: arrayUnion(),
      joinCode: joinCode,
      genre: genre,
    })
    return this.af.collection('teacherUsers').doc(userId).update({
      courses: arrayUnion({joinCode: joinCode, genre: genre})
    })
  }

  getCourseData(genre: any, joinCode: any) {
    return this.af.collection('courses').doc('courses').collection(genre).doc(joinCode).valueChanges().pipe(first()).toPromise();
  }


  joinCourse(genre: any, joinCode: any, userId: any) {
    this.af.collection('studentUsers').doc(userId).update({
      courses: arrayUnion({joinCode: joinCode, genre: genre})
    })
    return this.af.collection('courses').doc('courses').collection(genre).doc(joinCode).update({
      students: arrayUnion(userId),
    })  
  }

  postNotes(genre: any, joinCode: any, file: any, fileName: any) {
    return this.af.collection('courses').doc('courses').collection(genre).doc(joinCode).update({
      notes: arrayUnion({file: file, fileName: fileName}),
    })      
  }

}

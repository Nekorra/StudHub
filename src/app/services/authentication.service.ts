import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayUnion } from 'firebase/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore
  ) { }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string, name: string, type: string) {
    if (type == "student") {
      return this.afAuth.createUserWithEmailAndPassword(email, password).then((user: any) => {
        this.af.collection('studentUsers').doc(`${user.user.uid}`).set({
          email: email,
          name: name,
          userId: user.user.uid,
          courses: arrayUnion()
        })
      });
    }
    if (type == "teacher") {
      return this.afAuth.createUserWithEmailAndPassword(email, password).then((user: any) => {
        this.af.collection('teacherUsers').doc(`${user.user.uid}`).set({
          email: email,
          name: name,
          userId: user.user.uid,
          courses: arrayUnion()
        })
      });
    }
  }

  getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getUserData(type: string, userId:string) {
    if(type == "teacher") {
      return this.af.collection('teacherUsers').doc(`${userId}`).valueChanges().pipe(first()).toPromise();
    }
    if(type == "student") {
      return this.af.collection('studentUsers').doc(`${userId}`).valueChanges().pipe(first()).toPromise();
    }
  } 

}

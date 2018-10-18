import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello LoginProvider Provider');
  }
  login() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
  loginEmail(email, senha){
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
  }
  registroEmail(email, senha){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, senha);
  }
}

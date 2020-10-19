import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }

  async login(email:string, password:string)
  {
    return new Promise((resolve, rejected)=>{
      this.afAuth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user)  
      }).catch(err => rejected(err));
    });
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }

}

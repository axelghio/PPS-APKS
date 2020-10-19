import { Injectable } from '@angular/core';

//import to firebase
import { Usuario } from '../Users';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private auth: AngularFireAuth ){ }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.auth.signInWithEmailAndPassword(email, password).then(response => {
        resolve(response);
      }).catch(error => rejected(error));
    });
  }
}

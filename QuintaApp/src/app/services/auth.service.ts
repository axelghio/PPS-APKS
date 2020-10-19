import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mensaje } from '../mensaje';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  listaMensajes: AngularFireList<any>
  listaMensajesB: AngularFireList<any>

  constructor(private afAuth:AngularFireAuth, private db: AngularFireDatabase) { }

  async login(email:string, password:string)
  {
    return new Promise((resolve, rejected)=>{
      this.afAuth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user)  
      }).catch(err => rejected(err));
    });
  }

  getCurrentUser(){
    return this.afAuth.currentUser;
  }

  //CLASE A
  getMensajes(){
    return this.listaMensajes = this.db.list("mensajesChatA");
  }

  guardarMensaje(msj: Mensaje){
    this.listaMensajes.push({
      correo: msj.correo,
      mensaje: msj.mensaje,
      fecha: msj.fecha,
    });
  }

  //CLASE B
  getMensajesB(){
    return this.listaMensajesB = this.db.list("mensajesChatB");
  }

  guardarMensajeB(msj: Mensaje){
    this.listaMensajesB.push({
      correo: msj.correo,
      mensaje: msj.mensaje,
      fecha: msj.fecha,
    });
  }
}

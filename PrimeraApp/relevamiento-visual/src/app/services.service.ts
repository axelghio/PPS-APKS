import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Usuario } from './clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  listaGalery: AngularFireList<any>;
  listaGaleryFeas: AngularFireList<any>;
  usuario: Usuario = new Usuario();
  userEmail:string;

  constructor(private servicio: AngularFireAuth, private db: AngularFireDatabase) {
  }

  async login(email:string, password:string)
  {
    return new Promise((resolve, rejected)=>{
      this.servicio.signInWithEmailAndPassword(email, password).then(user =>{
        this.userEmail = email;
        resolve(user)  
      }).catch(err => rejected(err));
    });
  }

  getCurrentUser() {
    return this.servicio.currentUser;
  }

  traerListaFotos(){
    return this.listaGalery = this.db.list("galeriaFotos");
  }

  traerListaFotosFeas(){
    return this.listaGaleryFeas = this.db.list("galeriaFotosFeas");
  }

  guardarUnaFoto(usuario: Usuario){
    this.listaGalery.push({
      email: usuario.email,
      foto: usuario.foto,
      fecha: usuario.fecha,
      likes: usuario.likes,
      clike: usuario.clike
    });
  }

  updateGaleria(usuarioData: Usuario) {
    this.listaGalery.update(usuarioData.$key, {
      likes: usuarioData.likes,
      clike: usuarioData.clike
    });
  }

  guardarUnaFotoFea(usuario: Usuario){
    this.listaGaleryFeas.push({
      email: usuario.email,
      foto: usuario.foto,
      fecha: usuario.fecha,
      likes: usuario.likes,
      clike: usuario.clike
    });
  }

  updateGaleriaFea(usuarioData: Usuario) {
    this.listaGaleryFeas.update(usuarioData.$key, {
      likes: usuarioData.likes,
      clike: usuarioData.clike
    });
  }
}
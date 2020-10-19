import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//import database
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//import service
import { AuthService } from "../services/auth.service";

//import class
import { Mensaje } from "../mensaje";
import { element } from 'protractor';

@Component({
  selector: 'app-sala-chat-a',
  templateUrl: './sala-chat-a.component.html',
  styleUrls: ['./sala-chat-a.component.scss'],
})
export class SalaChatAComponent implements OnInit {

  listaMensajesClaseA;
  envMensj: string;
  mensaje: Mensaje = new Mensaje();
  email;
  whoIs = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private db: AngularFireDatabase ){
  }

  ngOnInit() {
    this.email = localStorage.getItem('correo');
    this.auth.getMensajes()
    .snapshotChanges()
    .subscribe((item) =>{
      this.listaMensajesClaseA = [];
      item.forEach((element) =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.mostrarUserEnSesion();
        this.listaMensajesClaseA.push(x as Mensaje);
      })
    })
  }

  mostrarUserEnSesion()
  {
    this.listaMensajesClaseA.forEach(element => {
      if(element.correo == this.email)
      {
        this.whoIs = true;
      }
    });
  }

  getFecha(): string {
    var fecha = new Date();
    let d, m, y, h, min, s;
    d = fecha.getDate();
    m = fecha.getUTCMonth();
    y = fecha.getFullYear();
    h = fecha.getHours().toString();
    min = fecha.getMinutes().toString();
    s = fecha.getSeconds().toString();
    return d + "/" + m + "/" + y + "-" + h + ":" + min + ":" + s;
  }

  EnviarMensaje(envMensj: string) {
    this.mensaje.correo = localStorage.getItem('correo');
    this.mensaje.fecha = this.getFecha();
    this.mensaje.mensaje = envMensj;
    this.envMensj = "";
    this.auth.guardarMensaje(this.mensaje);
  }

  Volver(){
    this.router.navigate(['principal']);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

//import database
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//import service
import { ServicesService } from "../services.service";

//import class
import { Usuario } from "../clases/usuario";

//import camera
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.component.html',
  styleUrls: ['./cosas-lindas.component.scss'],
})
export class CosasLindasComponent implements OnInit {

  user: Usuario = new Usuario();
  fotos;
  base64Image: string;
  listaGaleria;

  constructor(
      private router: Router,
      private auth: ServicesService,
      private camera: Camera,
      private db: AngularFireDatabase ){
        this.auth.traerListaFotos();
  }

  ngOnInit() {
        this.auth.traerListaFotos()
        .snapshotChanges()
        .subscribe((item) => {
          this.listaGaleria = [];
          item.forEach((element) => {
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            //CONTADOR DE LIKES
            if (x["likes"] == "") {
              x["clikes"] = 0;
            } else {
              let arregloDeLikes: string[] = x["likes"].split(",");
              x["clikes"] = arregloDeLikes.length;
            }
            this.listaGaleria.push(x as Usuario);
          });
        });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }
    this.camera.getPicture(options)
    .then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData
      setTimeout(() => {
        this.auth.getCurrentUser().then((response: any) => {
          this.user.email = response.email;
          this.user.foto = this.base64Image;
          this.user.fecha = this.getFecha();
          this.user.clike = 0;
          this.user.likes = '';
          this.auth.guardarUnaFoto(this.user);
        });
      }, 2000);
    }, (err) => {
      alert("Camera issue: " + err);
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

  AccessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData)=>{
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.auth.getCurrentUser().then((response: any) => {
        this.user.email = response.email;
        this.user.foto = this.base64Image;
        this.user.fecha = this.getFecha();
        this.user.clike = 0;
        this.user.likes = '';
        this.auth.guardarUnaFoto(this.user);
      });
    }, (err) => {
      console.log(err);
    });
  }

  DarLike(item: Usuario) {
    let permitirLike: boolean = true;
    let arregloDeLikes: string[] = item.likes.split(",");

    if (item.likes != "") {
      arregloDeLikes.forEach((element) => {
        if (element == this.auth.userEmail) {
          permitirLike = false;
        }
      });

      if (permitirLike) {
        item.likes += "," + this.auth.userEmail;
        item.clike++;
        this.auth.updateGaleria(item);
      }
    } else {
      item.likes = this.auth.userEmail;
      item.clike++;
      this.auth.updateGaleria(item);
    }
  }

  Volver(){
    this.router.navigate(['/principal']);
  }
}
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions} from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { element } from 'protractor';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  data:any;
  estadoTelefono = '';

  controlDerecha: number = 0;
  controlIzquierda: number = 0;
  controlReposo: number = 0;
  controlVertical: number = 0;
  reproduciendo: boolean = false;

  presionado:boolean = false;
  subscription = null;
  audio;
  btnText = 'Activar';
  textAlarma = '';
  textError = '';
  
  //variable css
  colorbackground;
  colorEstadoAlarma;
  colorError;

  //variables de usuarios
  claveCorrecta = false;
  claveUsuario = '';

  constructor(
    private userService: AuthService,
    private deviceMotion: DeviceMotion,
    private flashDevice: Flashlight,
    private vibrar: Vibration,
    private alert: AlertController
    ) { }

  ngOnInit() {
  }

  options: DeviceMotionAccelerometerOptions = {
    frequency : 500
  };

  ActivarAlarma(){
    this.claveUsuario = localStorage.getItem('clave');
    if(this.presionado)
    {
      this.DesactivarAlarmaClave();
    }
    else{
      this.btnText = 'Apagar';
      this.presionado = !this.presionado;
      this.PruebaAcelerometro();
      this.textAlarma = 'Alarma Activada!';
      this.colorbackground = document.getElementById('color');
      this.colorbackground.style.background = "red";
      this.colorEstadoAlarma = document.getElementById("style-estado-alarm");
      this.colorEstadoAlarma.style.border = "double wheat";
    }
  }

  PruebaAcelerometro() {
    if(this.presionado)
    {
      this.subscription = this.deviceMotion
      .watchAcceleration(this.options)
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;

      if(this.data.z >= 9)
      {
        if(this.controlReposo <= 1)
        {
          this.controlDerecha = 0;
          this.controlIzquierda = 0;
          this.controlVertical = 0;
          this.controlReposo++;
          this.estadoTelefono = 'Estoy sobre la mesa';
          this.reproducirSonido('Reposo');
          this.vibrar.vibrate(5000);
        }
      }
      else if(this.data.x >= 5)
      {
        if(this.controlIzquierda <= 1)
        {
          this.controlDerecha = 0;
          this.controlVertical = 0;
          this.controlReposo = 0;
          this.controlIzquierda++;
          this.estadoTelefono = 'Apoyado en la mesa inclinado hacia la izquierda.';
          this.reproducirSonido('Izquierda');
        }
      }

      else if(this.data.x <= -5)
      {
        if(this.controlDerecha <= 1)
        {
          this.controlIzquierda = 0;
          this.controlVertical = 0;
          this.controlReposo = 0;
          this.controlDerecha++;
          this.estadoTelefono = 'Apotado en la mesa inclinado hacia la derecha.';
          this.reproducirSonido('Derecha');
        }
      }else if(this.data.y >= 5)
      {
        if(this.controlVertical <= 1)
        {
          this.controlIzquierda = 0;
          this.controlDerecha = 0;
          this.controlReposo = 0;
          this.controlVertical++;
          this.estadoTelefono = 'Apoyado en la mesa inclinado hacia arriba.';
          this.Linterna();
          this.reproducirSonido('Vertical');
        }
      }
    });
    }
    else{
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  reproducirSonido(caso: string) {
    switch (caso) {
      case "Derecha":
        this.Play("../../../assets/audios/Derecha.mp3");
        break;
      case "Izquierda":
        this.Play("../../../assets/audios/Izquierda.mp3");
        break;
      case "Reposo":
        this.Play("../../../assets/audios/Reposo.mp3");
        break;
      case "Vertical":
        this.Play("../../../assets/audios/Vertical.mp3");
        break;
    }
  }

  Play(path: string) {
    if (!this.reproduciendo) {
      this.reproduciendo = true;
      this.audio = new Audio(path);
      this.audio.play();
    }

    setTimeout(() => {
      this.reproduciendo = false;
    }, 1000);
  }

  Linterna(){
    this.flashDevice.switchOn();

    setTimeout(() =>{
      this.flashDevice.switchOff()
    }, 5000);
  }

  async DesactivarAlarmaClave() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Desactivar Alarma!',
      message: 'Para desactivar la alarma ingrese la clave.!!!',
      inputs: [
        {
          name: 'clave',
          type: 'text',
          placeholder: 'Ingrese la clave'
        }],
      buttons: [
        {
          text: 'Okay',
          handler: datos => {
            if(datos.clave === this.claveUsuario)
            {
              this.claveCorrecta = true;
            }
            else{
              this.colorError = document.getElementById("style-error-alarm");
              this.colorError.style.border = "groove wheat";
              this.textError = "La contraseña de la alarma es incorrecta.";
              this.claveCorrecta = false;
            }          
            if(this.claveCorrecta){
              this.textError = "";
              this.textAlarma = 'Alarma Desactivada!';
              this.colorbackground = document.getElementById('color');
              this.colorbackground.style.background = "green";
              this.colorError.style.border = "none";
              this.btnText = 'Activar';
              this.presionado = !this.presionado;
              this.PruebaAcelerometro();
            }
          }
        }
      ]      
    });

    await alert.present();
  }
}

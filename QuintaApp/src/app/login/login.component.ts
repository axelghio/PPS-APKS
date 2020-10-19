import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, public alertController: AlertController) {
   }

  ngOnInit() {
  }

  public useremail:string;
  public password:string;
  public mensajeMail:string;
  public mensajePass:string;
  
  Selected(value:string)
  {
    switch (value) {
      case 'admin':
      {
        this.useremail = 'admin@admin.com';
        this.password = '111111';
        break;
      }
      case 'invitado':
      {
        this.useremail = 'invitado@invitado.com';
        this.password = '222222';
        break;
      }
      case 'usuario':
      {
        this.useremail = 'usuario@usuario.com';
        this.password = '333333';
        break;
      }
      case 'anonimo':
      {
        this.useremail = 'anonimo@anonimo.com';
        this.password = '444444';
        break;
      }
      case 'tester':
      {
        this.useremail = 'tester@tester.com';
        this.password = '555555';
        break;
      }
      default:
        break;
    }
  }

  Send(user:string, pass:string )
  {
    if(user != '' && pass !='')
    {
      this.authService.login(this.useremail, this.password).then( res =>{
        this.router.navigate(['principal']);
      }).catch(err => this.ErrorMensaje());
    }
    else
    {
      this.CamposVacios();
    }
  }

  async ErrorMensaje()
  {
    const alert = await this.alertController.create({
      cssClass: 'usersCss',
      header: 'Error, email o contraseña incorrecta.',
      buttons: [
        {
          text: 'ok.',
        },
      ]
    });

    await alert.present();
  }

  LimpiarPantalla()
  {
    this.useremail = '';
    this.password = '';
    this.mensajeMail = '';
    this.mensajePass = '';
  }  

  async CamposVacios()
  {
    const alert = await this.alertController.create({
      cssClass: 'usersCss',
      header: 'Los campos estan vacios.',
      buttons: [
        {
          text: 'ok.',
        },
      ]
    });

    await alert.present();
  }


  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'usersCss',
      header: 'Seleccione Cuenta',
      buttons: [
        {
          text: 'Administrador',
          handler: () => {
            this.Selected('admin');
          }
        },
        {
          text: 'Invitado',
          handler: () => {
            this.Selected('invitado');
          }
        },
        {
          text: 'Usuario',
          handler: () => {
            this.Selected('usuario');
          }
        },
        {
          text: 'Anonimo',
          handler: () => {
            this.Selected('anonimo');
          }
        },
        {
          text: 'Tester',
          handler: () => {
            this.Selected('tester');
          }
        },
      ]
    });

    await alert.present();
  }
}
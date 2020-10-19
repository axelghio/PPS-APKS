import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {}

  public useremail:string;
  public password:string;
  public mensajeMail:string;
  public mensajePass:string;
  public SelectedItem:string;
  
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
        this.router.navigate(['/principal']);
      }).catch(err => this.ErrorMensaje());
    }
    else
    {
      this.AlertError();
    }
  }

  ErrorMensaje()
  {
    this.AlertError();
    return this.mensajeMail = "Los datos son incorrectos o no existe el usuario.",this.mensajePass = "Los datos son incorrectos o no existe el usuario.";
  }

  LimpiarPantalla()
  {
    this.useremail = '';
    this.password = '';
    this.mensajeMail = '';
    this.mensajePass = '';
  }

  OnChange(event){
    this.Selected(event.target.value);
  }

  async AlertError() {
    const alert = await this.alertController.create({
      cssClass: 'alertErrorCSS',
      header: 'ERROR!',
      message: 'Los datos son incorrectos o no existe el usuario!!!',
      buttons: [
        {
          text: 'Bueno',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.LimpiarPantalla();
          }
        }
      ]
    });

    await alert.present();
  }
}
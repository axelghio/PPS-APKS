import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { ActionSheetController } from '@ionic/angular';

//firebase


//clase usuarios:
import { Usuario } from "../Users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public useremail: string;
  public clave: string;
  public mensajeMail: string = '';
  public mensajePass: string = '';


  userList : Usuario[];
  public user : Usuario = new Usuario();

  constructor(
    public userService: AuthService,
    public router: Router,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  
  Selected(value:string)
  {
    switch (value) {
      case 'admin':
      {
        this.useremail = 'admin@admin.com';
        this.clave = '111111';
        break;
      }
      case 'invitado':
      {
        this.useremail = 'invitado@invitado.com';
        this.clave = '222222';
        break;
      }
      case 'usuario':
      {
        this.useremail = 'usuario@usuario.com';
        this.clave = '333333';
        break;
      }
      case 'anonimo':
      {
        this.useremail = 'anonimo@anonimo.com';
        this.clave = '444444';
        break;
      }
      case 'tester':
      {
        this.useremail = 'tester@tester.com';
        this.clave = '555555';
        break;
      }
      default:
        break;
    }
  }

  Send(user:string, pass:string )
  {
    this.router.navigate(['/principal']);
    if(user != '' && pass !='')
    {
      this.userService.login(this.useremail, this.clave).then( res =>{
        localStorage.setItem("clave", this.clave);
        this.router.navigate(['/principal']);
      }).catch(err => this.ErrorMensaje());
    }
    else
    {
      this.mensajeMail = "Los campos estan vacios.";
      this.mensajePass = "Los campos estan vacios.";
    }
  }

  ErrorMensaje()
  {
    return this.mensajeMail = "Los datos son incorrectos o no existe el usuario.",this.mensajePass = "Los datos son incorrectos o no existe el usuario.";
  }

  LimpiarPantalla()
  {
    this.useremail = '';
    this.clave = '';
    this.mensajeMail = '';
    this.mensajePass = '';
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione una cuenta',
      cssClass: 'AccountSelected',
      buttons: [{
        text: 'Administrador',
        icon: 'happy',
        handler: () => {
          this.Selected('admin');
        }
      }, {
        text: 'Invitado',
        icon: 'happy',
        handler: () => {
          this.Selected('invitado');
        }
      }, {
        text: 'Usuario',
        icon: 'happy',
        handler: () => {
          this.Selected('usuario');          
        }
      }, {
        text: 'Anonimo',
        icon: 'happy',
        handler: () => {
          this.Selected('anonimo');
        }
      }, {
        text: 'Tester',
        icon: 'happy',
        handler: () => {
          this.Selected('tester');
        }
      }]
    });
    await actionSheet.present();
  }
}
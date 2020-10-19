import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: ServicesService, public router: Router) { }

  ngOnInit() {}

  public useremail:string = '';
  public password:string = '';
  public mensaje:string;

  Selected(value:string)
  {
    switch (value) {
      case 'admin':
        this.useremail = 'admin@admin.com';
        this.password = '111111';
        break;
      case 'invitado':
        this.useremail = 'invitado@invitado.com';
        this.password = '222222';
        break;
      case 'usuario':
        this.useremail = 'usuario@usuario.com';
        this.password = '333333';
        break;
      case 'anonimo':
        this.useremail = 'anonimo@anonimo.com';
        this.password = '444444';
        break;
      case 'tester':
        this.useremail = 'tester@tester.com';
        this.password = '555555';
        break;
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
      this.mensaje = "Los campos estan vacios.";
    }
  }

  ErrorMensaje()
  {
    return this.mensaje = "Los datos son incorrectos o no existe el usuario.";
  }

  LimpiarPantalla()
  {
    this.useremail = '';
    this.password = '';
    this.mensaje = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//import service
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  imageA: string = "../../assets/image/ImagenA.png";
  imageB: string = "../../assets/image/ImagenB.png";
  constructor(public router:Router, private auth: AuthService) {
   }

  ngOnInit() {
    this.auth.getCurrentUser().then((response: any) => {
      localStorage.setItem('correo', response.email);
      console.log("Guardo en el LocalStorage: " +response.email);
    });
  }



  EntrarChatA(){
    this.router.navigate(['chatA']);
  }

  EntrarChatB(){
    this.router.navigate(['chatB']);
  }

  Volver(){
    this.router.navigate(['login']);
  }
}

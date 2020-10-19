import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  Volver(){
    this.router.navigate(['/login']);
  }

  cosasLindas(){
    this.router.navigate(['/cosasLindas']);
  }

  cosasFeas(){
    this.router.navigate(['/cosasFeas']);
  }
}

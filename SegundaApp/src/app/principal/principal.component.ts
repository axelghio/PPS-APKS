import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyMxRecord } from 'dns';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  valorIdioma: string = "";
  valorTema: string = "";
  tema;
  audio: any;

  //var animales
  animal:string;

  //var color
  color:string;

  //var numero
  numero:string;

  constructor(private router: Router) {
    this.valorIdioma = "español";
  }

  ngOnInit() {
  }

  elegirIdioma(valorIdioma: string) {
    this.valorIdioma = valorIdioma;
    console.log(this.valorIdioma);
  }

  elegirTema(valorTema: string) {
    this.valorTema = valorTema;
    console.log(this.valorIdioma);
  }

  GoBack() {
    this.router.navigate(['/login'])
  }

  CambiarComponente() {
    if (this.valorIdioma != "" && this.valorTema != "") {
      switch (this.valorTema) {
        case "animales":
          this.router.navigate(['/animales', this.valorIdioma])
          this.valorIdioma = "";
          this.valorTema = "";
          break;
        case "numeros":
          this.router.navigate(['/numeros', this.valorIdioma])
          this.valorIdioma = "";
          this.valorTema = "";
          break;
        case "colores":
          this.router.navigate(['/colores', this.valorIdioma])
          this.valorIdioma = "";
          this.valorTema = "";
          break;
        default:
          break;
      }
    }
  }
  
  desconectar(){
    this.router.navigate(['/login']);
  }

  //Repoducir Animal
  ReproducirAnimal(animal: string) {
    this.animal = animal;
    this.tema = animal;
    console.log(this.animal);
    switch (this.valorIdioma) {
      case "ingles":
        this.ReproducirAnimalIngles(animal);
        break;

      case "español":
        this.ReproducirAnimalEspañol(animal);
        break;

      case "portugues":
        this.ReproducirAnimalPortugues(animal);
        break;

      default:
        break;
    }
  }

  ReproducirAnimalEspañol(animal: string) {
    switch (animal) {
      case "leon":
        this.audio = new Audio('../../../assets/audios/español/leon.mp3');
        this.audio.play();
        break;
      case "gallina":
        this.audio = new Audio('../../../assets/audios/español/gallina.mp3');
        this.audio.play();
        break;
      case "gato":
        this.audio = new Audio('../../../assets/audios/español/gato.mp3');
        this.audio.play();
        break;
      case "oveja":
        this.audio = new Audio('../../../assets/audios/español/oveja.mp3');
        this.audio.play();
        break;
      case "oso":
        this.audio = new Audio('../../../assets/audios/español/oso.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  ReproducirAnimalIngles(animal: string) {
    switch (animal) {
      case "leon":
        this.audio = new Audio('../../../assets/audios/ingles/lion.mp3');
        this.audio.play();
        break;
      case "gallina":
        this.audio = new Audio('../../../assets/audios/ingles/hen.mp3');
        this.audio.play();
        break;
      case "gato":
        this.audio = new Audio('../../../assets/audios/ingles/cat.mp3');
        this.audio.play();
        break;
      case "oveja":
        this.audio = new Audio('../../../assets/audios/ingles/sheep.mp3');
        this.audio.play();
        break;
      case "oso":
        this.audio = new Audio('../../../assets/audios/ingles/bear.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  ReproducirAnimalPortugues(animal: string) {
    switch (animal) {
      case "leon":
        this.audio = new Audio('../../../assets/audios/portugues/leoun.mp3');
        this.audio.play();
        break;
      case "gallina":
        this.audio = new Audio('../../../assets/audios/portugues/galina.mp3');
        this.audio.play();
        break;
      case "gato":
        this.audio = new Audio('../../../assets/audios/portugues/gato.mp3');
        this.audio.play();
        break;
      case "oveja":
        this.audio = new Audio('../../../assets/audios/portugues/ovela.mp3');
        this.audio.play();
        break;
      case "oso":
        this.audio = new Audio('../../../assets/audios/portugues/urso.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  //Repoducir Color
  ReproducirColor(color: string) {
    this.color = color;
    this.tema = color;
    switch (this.valorIdioma) {
      case "ingles":
        this.ReproducirColorIngles(color);
        break;

      case "español":
        this.ReproducirColorEspañol(color);
        break;

      case "portugues":
        this.ReproducirColorPortugues(color);
        break;

      default:
        break;
    }
  }

  ReproducirColorEspañol(color: string) {
    switch (color) {
      case "amarillo":
        this.audio = new Audio('../../../assets/audios/español/amarillo.mp3');
        this.audio.play();
        break;
      case "azul":
        this.audio = new Audio('../../../assets/audios/español/azul.mp3');
        this.audio.play();
        break;
      case "celeste":
        this.audio = new Audio('../../../assets/audios/español/celeste.mp3');
        this.audio.play();
        break;
      case "naranja":
        this.audio = new Audio('../../../assets/audios/español/naranja.mp3');
        this.audio.play();
        break;
      case "verde":
        this.audio = new Audio('../../../assets/audios/español/verde.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  ReproducirColorIngles(color: string) {
    switch (color) {
      case "amarillo":
        this.audio = new Audio('../../../assets/audios/ingles/yellow.mp3');
        this.audio.play();
        break;
      case "azul":
        this.audio = new Audio('../../../assets/audios/ingles/blue.mp3');
        this.audio.play();
        break;
      case "celeste":
        this.audio = new Audio('../../../assets/audios/ingles/lightBlue.mp3');
        this.audio.play();
        break;
      case "naranja":
        this.audio = new Audio('../../../assets/audios/ingles/orange.mp3');
        this.audio.play();
        break;
      case "verde":
        this.audio = new Audio('../../../assets/audios/ingles/green.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  ReproducirColorPortugues(color: string) {
    switch (color) {
      case "amarillo":
        this.audio = new Audio('../../../assets/audios/portugues/amarelo.mp3');
        this.audio.play();
        break;
      case "azul":
        this.audio = new Audio('../../../assets/audios/portugues/azul.mp3');
        this.audio.play();
        break;
      case "celeste":
        this.audio = new Audio('../../../assets/audios/portugues/azulClaro.mp3');
        this.audio.play();
        break;
      case "naranja":
        this.audio = new Audio('../../../assets/audios/portugues/laranja.mp3');
        this.audio.play();
        break;
      case "verde":
        this.audio = new Audio('../../../assets/audios/portugues/vershde.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  //Repoducir Numero
  ReproducirNumero(numero: string) {
    this.numero = numero;
    this.tema = numero;
    switch (this.valorIdioma) {
      case "ingles":
        this.ReproducirNumeroIngles(numero);
        break;

      case "español":
        this.ReproducirNumeroEspañol(numero);
        break;

      case "portugues":
        this.ReproducirNumeroPortugues(numero);
        break;

      default:
        break;
    }
  }

  ReproducirNumeroEspañol(numero: string) {
    switch (numero) {
      case "uno":
        this.audio = new Audio('../../../assets/audios/español/uno.mp3');
        this.audio.play();
        break;
      case "dos":
        this.audio = new Audio('../../../assets/audios/español/dos.mp3');
        this.audio.play();
        break;
      case "tres":
        this.audio = new Audio('../../../assets/audios/español/tres.mp3');
        this.audio.play();
        break;
      case "cuatro":
        this.audio = new Audio('../../../assets/audios/español/cuatro.mp3');
        this.audio.play();
        break;
      case "cinco":
        this.audio = new Audio('../../../assets/audios/español/cinco.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  ReproducirNumeroIngles(numero: string) {
    switch (numero) {
      case "uno":
        this.audio = new Audio('../../../assets/audios/ingles/one.mp3');
        this.audio.play();
        break;
      case "dos":
        this.audio = new Audio('../../../assets/audios/ingles/two.mp3');
        this.audio.play();
        break;
      case "tres":
        this.audio = new Audio('../../../assets/audios/ingles/three.mp3');
        this.audio.play();
        break;
      case "cuatro":
        this.audio = new Audio('../../../assets/audios/ingles/four.mp3');
        this.audio.play();
        break;
      case "cinco":
        this.audio = new Audio('../../../assets/audios/ingles/five.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }

  ReproducirNumeroPortugues(numero: string) {
    switch (numero) {
      case "uno":
        this.audio = new Audio('../../../assets/audios/portugues/um.mp3');
        this.audio.play();
        break;
      case "dos":
        this.audio = new Audio('../../../assets/audios/portugues/dois.mp3');
        this.audio.play();
        break;
      case "tres":
        this.audio = new Audio('../../../assets/audios/portugues/tres.mp3');
        this.audio.play();
        break;
      case "cuatro":
        this.audio = new Audio('../../../assets/audios/portugues/cuatro.mp3');
        this.audio.play();
        break;
      case "cinco":
        this.audio = new Audio('../../../assets/audios/portugues/cinco.mp3');
        this.audio.play();
        break;
      default:
        break;
    }
  }
}
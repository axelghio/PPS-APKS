import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//webrouting path
import { LoginComponent } from "./login/login.component";
import { PrincipalComponent } from "./principal/principal.component";
import { SalaChatAComponent } from './sala-chat-a/sala-chat-a.component';
import { SalaChatBComponent } from './sala-chat-b/sala-chat-b.component';


export const firebaseConfig = {
  apiKey: "AIzaSyD2KE71_IZN8Zazia0UftXRSrDL5Pp36NI",
  authDomain: "conversando-en-el-aula-2c610.firebaseapp.com",
  databaseURL: "https://conversando-en-el-aula-2c610.firebaseio.com",
  projectId: "conversando-en-el-aula-2c610",
  storageBucket: "conversando-en-el-aula-2c610.appspot.com",
  messagingSenderId: "624997022034",
  appId: "1:624997022034:web:59b78c962411bc7716628b"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    SalaChatAComponent,
    SalaChatBComponent
  ],
  imports: 
  [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
    ],
    providers: 
    [
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  
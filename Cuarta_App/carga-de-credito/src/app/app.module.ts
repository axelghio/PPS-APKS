import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule} from "@angular/fire";

//webrouting path
import { LoginComponent } from "./login/login.component";
import { PrincipalComponent } from "./principal/principal.component";

//QR
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyBKDEXddaQS_t0caZSEYJjraOGBth5Kumo",
  authDomain: "pruebaapp-e78cc.firebaseapp.com",
  databaseURL: "https://pruebaapp-e78cc.firebaseio.com",
  projectId: "pruebaapp-e78cc",
  storageBucket: "pruebaapp-e78cc.appspot.com",
  messagingSenderId: "651154607204",
  appId: "1:651154607204:web:d762a9337111e67b102371",
  measurementId: "G-W92VC6J9PD"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    QRScanner,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

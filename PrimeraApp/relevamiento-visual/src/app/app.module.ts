import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

//Camera
import { Camera } from '@ionic-native/camera/ngx';

//webrouting path
import { LoginComponent } from "./login/login.component";
import { CosasLindasComponent } from './cosas-lindas/cosas-lindas.component';
import { CosasFeasComponent } from './cosas-feas/cosas-feas.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//services
import { ServicesService } from './services.service';


export const firebaseConfig = {
  apiKey: "AIzaSyC-YKgIWEdceZff-nRelrXj4yNXXaH8jAc",
  authDomain: "relevamiento-visual-167b0.firebaseapp.com",
  databaseURL: "https://relevamiento-visual-167b0.firebaseio.com",
  projectId: "relevamiento-visual-167b0",
  storageBucket: "relevamiento-visual-167b0.appspot.com",
  messagingSenderId: "161345940186",
  appId: "1:161345940186:web:617b664b007d1ed10e93e3"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CosasLindasComponent,
    CosasFeasComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    Camera,
    ServicesService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

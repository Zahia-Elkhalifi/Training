import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';// pour se connecter à Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
export const firebaseConfig = {
  apiKey: "AIzaSyBL4wq1QxrPj2tiAA9f6bXan5VhfNrI2Fc",
    authDomain: "ionic-39be9.firebaseapp.com",
    projectId: "ionic-39be9",
    storageBucket: "ionic-39be9.appspot.com",
    messagingSenderId: "475234302267",
    appId: "1:475234302267:web:afa2f54fb9f830e5101f1e",
    measurementId: "G-M2YJ3SVND1"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

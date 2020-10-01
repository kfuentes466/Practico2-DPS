import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaPrincipalComponent } from './componentes/pantalla-principal/pantalla-principal.component';
import { IniciaSesionComponent } from './componentes/inicia-sesion/inicia-sesion.component';
import { ResgistrateComponent } from './componentes/resgistrate/resgistrate.component';

//Cosas de firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { UsuarioService } from './servicios/usuario.service';
import { VrificarCorreoComponent } from './componentes/vrificar-correo/vrificar-correo.component';
@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    IniciaSesionComponent,
    ResgistrateComponent,
    VrificarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireAuth,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { UsuarioService } from './servicios/usuario.service';
import { VrificarCorreoComponent } from './componentes/vrificar-correo/vrificar-correo.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { HistorialListaComponent } from './componentes/historial-lista/historial-lista.component';
import { ClienteService } from './servicios/clientes/cliente.service';
//Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    IniciaSesionComponent,
    ResgistrateComponent,
    VrificarCorreoComponent,
    HistorialComponent,
    HistorialListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //AngularFireAuth,
    AngularFirestoreModule,
    AngularFireAuthModule,
    //Toastr
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    UsuarioService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable, NgZone } from '@angular/core';

import { Usuarios } from '../modelos/usuarios';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioDatos : any;

  constructor(
    public afs: AngularFirestore,   //  Inyectar Servicio Firestore
    public afAuth: AngularFireAuth, // Inyectar el servicio de autenticación de Firebase
    public router: Router,  
    public ngZone: NgZone
  ) {

    this.afAuth.authState.subscribe(usuario => {
      if (usuario) {
        this.usuarioDatos = usuario;
        localStorage.setItem('user', JSON.stringify(this.usuarioDatos));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  //Inicio de sesion con correo 
  IniciarSesion(correo, contrasena){
    return this.afAuth.signInWithEmailAndPassword(correo, contrasena).then((result) => {
      this.ngZone.run(()=> {
        this.router.navigate(['principal']);
      });
      this.SetUsuarioDatos(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
  
  //Pner los datos de usuario
  SetUsuarioDatos(usuario){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${usuario.uid}`);
    const usuarioDatos: Usuarios = {
      uid : usuario.uid,
      displayName : usuario.displayName,
      //telefono : usuario.telefono,
      email : usuario.email, 
      emailVerified : usuario.emailVerified
    }
    return userRef.set(usuarioDatos, { merge:true})
  }

  Registrate(correo, contrasena){
    return this.afAuth.createUserWithEmailAndPassword(correo, contrasena).then((result) => {
      this.MandarVerificacion();
      this.SetUsuarioDatos(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  MandarVerificacion(){
    return this.afAuth.currentUser.then(u => u.sendEmailVerification()).then(() => {
      this.router.navigate(['verificar-correo-electronico']);
    })
  }

  get enLinea():boolean {
    const usuario = JSON.parse(localStorage.getItem('user'));
    return (usuario !== null && usuario.emailVerified !== false) ? true: true;
  }

  //Iniciar con google
  GoogleAuth(){
    return this.AuthIniciar(new auth.GoogleAuthProvider());
  }

  AuthIniciar(provider){
    return this.afAuth.signInWithPopup(provider).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['principal']);
      })
      this.SetUsuarioDatos(result.user);
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  //Desloguear
  Desloguear(){
    return this.afAuth.signOut().then(() => {
      localStorage.setItem('user', null);
      localStorage.removeItem('user');
      this.router.navigate(['inicia-sesion']);
    })
  }
  
 }

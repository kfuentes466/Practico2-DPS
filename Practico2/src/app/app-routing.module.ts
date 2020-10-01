import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes para las rutas
import { IniciaSesionComponent } from './componentes/inicia-sesion/inicia-sesion.component';
import { PantallaPrincipalComponent }  from './componentes/pantalla-principal/pantalla-principal.component';
//Es el registrate, me confundí y le puse "resgistrate :,c"
import { ResgistrateComponent }  from './componentes/resgistrate/resgistrate.component';
import { VrificarCorreoComponent } from './componentes/vrificar-correo/vrificar-correo.component'; 

const routes: Routes = [
  {path:'',redirectTo:'/inicia-sesion', pathMatch: 'full'},
  {path:'inicia-sesion', component: IniciaSesionComponent},
  {path:'registrate', component: ResgistrateComponent},
  {path:'principal', component: PantallaPrincipalComponent},
  {path:'verificar-correo-electronico', component: VrificarCorreoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

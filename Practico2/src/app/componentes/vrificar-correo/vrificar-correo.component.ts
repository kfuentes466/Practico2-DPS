import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../servicios/usuario.service';
@Component({
  selector: 'app-vrificar-correo',
  templateUrl: './vrificar-correo.component.html',
  styleUrls: ['./vrificar-correo.component.css']
})
export class VrificarCorreoComponent implements OnInit {

  constructor(public usuarioService : UsuarioService) 
  { }

  ngOnInit(): void {
  }

}

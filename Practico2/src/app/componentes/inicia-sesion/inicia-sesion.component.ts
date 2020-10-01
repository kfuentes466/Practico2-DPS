import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../servicios/usuario.service'; 
@Component({
  selector: 'app-inicia-sesion',
  templateUrl: './inicia-sesion.component.html',
  styleUrls: ['./inicia-sesion.component.css']
})
export class IniciaSesionComponent implements OnInit {

  constructor(public usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

}

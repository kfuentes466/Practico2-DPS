import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../servicios/usuario.service';
@Component({
  selector: 'app-resgistrate',
  templateUrl: './resgistrate.component.html',
  styleUrls: ['./resgistrate.component.css']
})
export class ResgistrateComponent implements OnInit {

  constructor(public usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

}

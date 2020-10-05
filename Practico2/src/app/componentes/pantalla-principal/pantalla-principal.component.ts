import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../servicios/usuario.service';


@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  constructor(public usuarioService : UsuarioService) { }


  ngOnInit(): void {
  }

}

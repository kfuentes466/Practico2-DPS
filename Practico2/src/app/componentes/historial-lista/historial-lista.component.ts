import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../modelos/clientes/cliente';

import { ClienteService } from '../../servicios/clientes/cliente.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-historial-lista',
  templateUrl: './historial-lista.component.html',
  styleUrls: ['./historial-lista.component.css']
})
export class HistorialListaComponent implements OnInit {

  clienteLista: Cliente[];
  constructor(
    public clienteService : ClienteService,
    public tostr: ToastrService
  ) { }

  ngOnInit(){
    return this.clienteService.traerClietes().snapshotChanges().subscribe(item => {
      this.clienteLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$Key"] = element.key;
        this.clienteLista.push(x as Cliente);
      });
    });
  }

  onEditar(cliente : Cliente){
    this.clienteService.seleccionadoCliente = Object.assign({}, cliente);
  }

}

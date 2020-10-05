import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../modelos/clientes/cliente';

import { ClienteService } from '../../servicios/clientes/cliente.service';

import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-historial-lista',
  templateUrl: './historial-lista.component.html',
  styleUrls: ['./historial-lista.component.css']
})
export class HistorialListaComponent implements OnInit {

  clienteLista: Cliente[];
  clienteLista2: Cliente[];
  buscar:string;


  constructor(
    public clienteService : ClienteService,
    public tostr: ToastrService
  ) { }

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    return this.clienteService.traerClietes().snapshotChanges().subscribe(item => {
      this.clienteLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.clienteLista.push(x as Cliente);
      });
    });
  }

  onEditar(cliente : Cliente){
    this.clienteService.seleccionadoCliente = Object.assign({}, cliente);
  }

  consultarCliente(){
    this.clienteLista = this.clienteLista.filter(data => {
      return data.dui.toString().trim() === this.buscar;
    })

    if(this.clienteLista.length === 0){
      this.tostr.error('Valor no encontrado!', 'Buqueda fallida!');
      this.cargarDatos();
    }else{

    }
  }

}

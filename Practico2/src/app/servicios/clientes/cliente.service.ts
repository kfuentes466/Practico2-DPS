import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Cliente } from '../../modelos/clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteLista: AngularFireList<any>;
  seleccionadoCliente: Cliente = new Cliente();
  constructor(private firebase: AngularFireDatabase) {}

   insertarCliente(cliente: Cliente){
     this.clienteLista.push({
      dui: cliente.dui, 
      nombre: cliente.nombre,
      mascota: cliente.mascota,
      tratamiento: cliente.tratamiento,
      medicamento: cliente.medicamento,
      atendido: cliente.atendido,
      consulta : cliente.consulta,
      precio : cliente.precio,
      ttpagar: cliente.ttpagar
     });
   }

   modificarCliente(cliente: Cliente){
     this.clienteLista.update(cliente.$key, {
      dui: cliente.dui, 
      nombre: cliente.nombre,
      mascota: cliente.mascota,
      tratamiento: cliente.tratamiento,
      medicamento: cliente.medicamento,
      atendido: cliente.atendido,
      consulta : cliente.consulta,
      precio : cliente.precio,
      ttpagar: cliente.ttpagar
     })
   }

   traerClietes(){
    return this.clienteLista = this.firebase.list('clientes');
   }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ClienteService } from '../../servicios/clientes/cliente.service';

import { Cliente } from '../../modelos/clientes/cliente';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(
    public clienteService : ClienteService,
    public toastr: ToastrService
  ) {}

  ngOnInit(){
    this.clienteService.traerClietes();
    this.resetForm();
  }

  onSubmit(clienteForm: NgForm){
    if(clienteForm.value.nombre != "" && clienteForm.value.dui != "" && clienteForm.value.precio > 0 && clienteForm.value.mascota !="" && clienteForm.value.tratamiento !=""  && clienteForm.value.medicamento !=""){
      if(clienteForm.value.$key == null){
        clienteForm.value.consulta = 1;
        clienteForm.value.ttpagar = clienteForm.value.precio;
        
        this.clienteService.insertarCliente(clienteForm.value);
        this.toastr.success('Cliente agregado de manera exitosa!', 'Cliente agregado');
      }else{
        this.clienteService.modificarCliente(clienteForm.value);
        this.toastr.success('Cliente modificado de manera exitosa!', 'Cliente modificado');
      }
      this.resetForm(clienteForm);
    }else{
      this.toastr.error('No puede dejar espacios vacios!', 'Error!!');
    }
    
  }

  resetForm(clienteForm?: NgForm){
    if(clienteForm != null)
      clienteForm.reset();
    this.clienteService.seleccionadoCliente = new Cliente();
  }
}

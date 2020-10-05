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

  clienteLista: Cliente[];
  datosRepetidos: Cliente[];
  constructor(
    public clienteService : ClienteService,
    public toastr: ToastrService
  ) {}

  ngOnInit(){
    this.clienteService.traerClietes();
    this.resetForm();
    this.cargarDatos();
  }

  onSubmit(clienteForm: NgForm){
    if(clienteForm.value.nombre != "" && clienteForm.value.dui != "" && clienteForm.value.precio > 0 && clienteForm.value.mascota !="" && clienteForm.value.tratamiento !=""  && clienteForm.value.medicamento !=""){
      if(clienteForm.value.$key == null){
        //mandando a llamar la funcion para llenar el arreglo datosRepetidos
        this.clienteRepetido(clienteForm.value.dui);
        //viendo el length del arreglo(se le suma 1, ya que se esta contando la visita que se esta ingresando)
        var rep : number = this.datosRepetidos.length+1; 
        //adignando el precio a la variable p
        var p : number = clienteForm.value.precio;
        //Aqui se hace lo del descuento
        if(rep > 5){
          p= p -(p)*(0.08);
        }else if(rep == 2){
          p = p -(p)*(0.05);
        }else{
          p = p;
        }
        //Se le ponen los valores a las variables
        clienteForm.value.ttpagar = p;
        clienteForm.value.consulta = rep;
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

  //Cargando todos los datos del firebase
  cargarDatos(){
    return this.clienteService.traerClietes().snapshotChanges().subscribe(item => {
      this.clienteLista = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$Key"] = element.key;
        this.clienteLista.push(x as Cliente);
      });
    });
  }

  //para ver si hay repetidos
  clienteRepetido(buscar: string){
    //si encuentra Dui repetido llena el arreglo datosRepetidos
    this.datosRepetidos = this.clienteLista.filter(data => {
      return data.dui.toString().trim() === buscar;
    })
  }
}

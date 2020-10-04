import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Cliente } from '../../modelos/clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  historial=[];
  dui:string;
  consulta:any;
  error:number;
  contador:number;
  descuento:number;
  clienteLista: AngularFireList<any>;
  seleccionadoCliente: Cliente = new Cliente();
  constructor(private firebase: AngularFireDatabase) {}

   insertarCliente(cliente: Cliente){
    
    
    let cuento:number;
   
    if(cliente.precio>0 && cliente.nombre!='' && cliente.tratamiento!='' && cliente.mascota!='' && cliente.atendido!='' && cliente.dui!='' && cliente.medicamento!='')
    {
      this.error=0;
      this.dui=cliente.dui;
      cuento = this.onVisita();
      
      if(cuento == 2)
        {
          this.descuento=cliente.precio*0.05;
          cliente.ttpagar=cliente.precio-this.descuento;
          cliente.consulta=cuento;
        }

        else if(cuento>5)
        {
          this.descuento=cliente.precio*0.08;
          cliente.ttpagar=cliente.precio-this.descuento;
          cliente.consulta=cuento;
        }
        else
        {
          cliente.ttpagar=cliente.precio;

        }
        
        this.consulta={"dui":cliente.dui,"medicamento":cliente.medicamento,"nombre":cliente.nombre,"mascota": cliente.mascota,"veterinario":cliente.atendido,"tratamiento":cliente.tratamiento,"visita":cuento,"precio":cliente.precio,"ttpagar":cliente.ttpagar};
        
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
    
  
  this.historial.push(this.consulta);
  console.log(this.historial);
  this.contador++;

    }
    else
    {
      this.error=1;
    }






   }

   onVisita(){
    let x: number;
    let veo:number = 1;
    
        if(this.historial.length > 0){
          for(x=0;x<this.historial.length;x++){
            if(this.historial[x].dui==this.dui){
              veo++;
              console.log(veo);
            }
          }
        }else{
          veo=1;
        }
    return(veo);
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

import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private tipos:TipoCliente[] = [];

  constructor(private firestore:AngularFirestore) { 

    this.tipos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Clientes Activos'
      },
      {
        id: 2,
        descripcion: 'Clientes Inactivos'
      },
      {
        id: 3,
        descripcion: 'Clientes Deudores'
      }
    ];
  }

  //método que retorne el arreglo de clientes
  getClientes(){
    return this.firestore.collection('clientes').snapshotChanges();
  }

  //método que retorne los tipos de cliente
  getTipos(){
    return this.tipos;
  }

  //método que agregue un cliente a la coleccion
  createCliente(cliente:Cliente){
    return this.firestore.collection('clientes').add(Object.assign({},cliente));
  }

  //metodo para actualizar un documento existente
  updateCliente(cliente:Cliente){
    this.firestore.doc('clientes/'+cliente.id).update(cliente);

  }

  //metodo para eliminar un documento de la coleccion
  deleteCliente(clienteId:string){
    this.firestore.doc('clientes/'+clienteId).delete();
    
  }
  
}

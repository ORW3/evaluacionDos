import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { TipoCliente } from '../../models/tipo_cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit {
  
  //propiedades
  clientes: Cliente[] = [];
  cliente = new Cliente();
  tipos:TipoCliente[] = [];

  //constructor
  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data=>{
      this.clientes = data.map(doc=>{
        return{
          ...doc.payload.doc.data() as Cliente,
          id:doc.payload.doc.id
        };
      })
    });
    this.tipos = this.clienteService.getTipos();
  }

  //metodo para insertar un cliente
  insertarCliente(){
    this.clienteService.createCliente(this.cliente);
    this.cliente = new Cliente();
  }

  //método para seleccionar un cliente para modificarlo o eliminarlo
  selectCliente(clienteSeleccionado:Cliente){
    this.cliente = clienteSeleccionado;
  }

  //metodo para modificar un cliente
  updateCliente(){
    this.clienteService.updateCliente;
    this.cliente = new Cliente();
  }

  //metodo para eliminar un cliente
  deleteCliente(id:string){
    this.clienteService.deleteCliente(id);
    this.cliente = new Cliente();
  }

}

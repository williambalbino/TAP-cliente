import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {
  clientes = [];

  constructor() { }

  adicionar(cliente){
    cliente.id = this.clientes.length;
    this.clientes.push(cliente);
  }

  remover(id){
    this.clientes.splice(id, 1);
  }
  
  get(id){
    return this.clientes[id];
  }

}

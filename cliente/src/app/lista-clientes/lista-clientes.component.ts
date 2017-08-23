import { ClienteService } from './../cliente.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  clientes: any[];

  constructor(clienteService: ClienteService, public router: Router) {
    this.clientes = clienteService.clientes;
   }

   ver(c){
     this.router.navigate(['/clientes', c.id]);
   }

}

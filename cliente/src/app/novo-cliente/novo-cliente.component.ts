import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent {

  cliente = {};

  constructor(public clienteService: ClienteService, public router: Router) { }

  adicionar(){
    this.clienteService.adicionar(this.cliente);
    this.router.navigate(['/clientes']);
  }

  

}

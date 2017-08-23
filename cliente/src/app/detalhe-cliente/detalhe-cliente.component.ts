import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent {
  cliente: any;

  constructor(public clienteService: ClienteService, public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.cliente = this.clienteService.get(+params['id']);
    });
  }
}

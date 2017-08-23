import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clientes: any[];

  constructor(cservice: ClienteService){
    this.clientes = cservice.clientes;
  }

}



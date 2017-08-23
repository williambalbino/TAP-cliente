import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteService } from './cliente.service';
import { FormsModule } from '@angular/forms';

import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

const rotas: Routes = [
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'clientes/novo', component: NovoClienteComponent },
  { path: 'clientes/:id', component: DetalheClienteComponent },
  { path: '',
    redirectTo: '/clientes',
    pathMatch: 'full' },
  { path: '**', component: ListaClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DetalheClienteComponent,
    NovoClienteComponent,
    ListaClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

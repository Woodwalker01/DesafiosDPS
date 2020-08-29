import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Cliente } from './cliente';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registro = [];
 
  Cliente: any;
  contador: number;
  cliente = new Cliente('', '', 0, '', 0,0,0);
  constructor() {}
  ngOnInit() {
    this.contador = 0;

  }
  
  ingresar() {
   
    if (this.cliente.visita >= 2 && this.cliente.visita < 4) {
      this.cliente.descuento=this.cliente.costo*0.05
      this.cliente.total = this.cliente.costo - this.cliente.descuento;
    } else if (this.cliente.visita >= 4) {
      this.cliente.descuento=this.cliente.costo*0.1
      this.cliente.total = this.cliente.costo - this.cliente.descuento;
    }
    // else{
    //   this.cliente.costo=this.cliente.costo;
    // }
    // if (this.dui.indexOf(this.cliente.DUI) == -1) {
    //   this.cliente.visita = 1;
    //   this.dui.push(this.cliente.DUI);
    // } else {
    //   this.cliente.visita++;
    // }
   
    this.Cliente = {
      nombre: this.cliente.nombre,
      DUI: this.cliente.DUI,
      Vehiculo: this.cliente.Vehiculo,
      costo: this.cliente.costo,
      visita: this.cliente.visita,
      descuento:this.cliente.descuento,
      total:this.cliente.total,
    };
    this.registro.push(this.Cliente);
    this.contador++;
    this.cliente.costo=0;
    this.cliente.nombre='';
    this.cliente.DUI='';
    this.cliente.visita=0;
    this.cliente.Vehiculo='';
    
    
  }
}

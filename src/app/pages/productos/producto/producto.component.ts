import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Producto } from '../interfaces/producto.inteface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto!:Producto;

  @Output() addCarroClick =new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  onclick():void{
    this.addCarroClick.emit(this.producto)
  }

}

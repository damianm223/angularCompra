import { Component, Input,  Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Producto } from '../interfaces/producto.inteface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductoComponent{

  @Input() producto!:Producto;

  @Output() addCarroClick =new EventEmitter<Producto>();

  onclick():void{
    this.addCarroClick.emit(this.producto)
  }

}

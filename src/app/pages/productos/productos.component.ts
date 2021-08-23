import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { tap } from 'rxjs/operators';
import { Producto } from './interfaces/producto.inteface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productService: ProductosService) { }

  ngOnInit(): void {

    this.productService.getProduct()
      .pipe(
        tap((producto: Producto[]) => this.productos = producto)
      )
      .subscribe()
  }



  addcarro(producto:Producto):void{
    console.log(producto)
  }

}

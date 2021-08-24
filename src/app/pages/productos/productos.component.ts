import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { tap } from 'rxjs/operators';
import { Producto } from './interfaces/producto.inteface';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-productos',
  template: `<section class="productos">
  <app-producto (addCarroClick)="addcarro($event)"
  
   [producto]="producto" 
  *ngFor='let producto of productos'></app-producto>
  </section>`,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productService: ProductosService, private carrito: CarritoService) { }

  ngOnInit(): void {

    this.productService.getProduct()
      .pipe(
        tap((producto: Producto[]) => this.productos = producto)
      )
      .subscribe()


  }



  addcarro(producto: Producto): void {
    this.carrito.actualizarCarrito(producto);
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { tap } from 'rxjs/operators';
import { Producto } from './interfaces/producto.inteface';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl:'./productos.component.html' ,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[]=[];
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


  buscar(art:any){
    const valor = art.target.value;
    
    //console.log(this.productos.find(prod => prod.name.toLowerCase() == valor.toLowerCase()))

    for(let pr of this.productos){
      
      if(pr.name.toLowerCase().indexOf(valor.toLowerCase())!=-1){
        this.productosFiltrados;
        //Continuar por aqui


      }
      

    }

  }

}

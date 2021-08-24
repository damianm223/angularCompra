
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.inteface';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: Producto[] = [];

  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private cantidadSubject = new BehaviorSubject<number>(0);

  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }


  get cantidadAction$(): Observable<number> {
    return this.cantidadSubject.asObservable();
  }

  get carritoAction$(): Observable<Producto[]> {
    return this.carritoSubject.asObservable();
  }


  actualizarCarrito(prod: Producto): void {
    this.addCarrito(prod);
    this.cantiTotal();
    this.calcTotal();
  }


  private addCarrito(prod: Producto): void {
    const existeProducto = this.productos.find(({ id }) => id == prod.id)
    if (existeProducto) {
      existeProducto.cantidad += 1;
    } else {
      this.productos.push({ ...prod, cantidad: 1 });
    }

    this.carritoSubject.next(this.productos);
  }

  private cantiTotal(): void {
    const totalProd = this.productos.reduce((acc, prod) => acc += prod.cantidad, 0);

    this.cantidadSubject.next(totalProd);

  }



  private calcTotal(): void {
    const total = this.productos.reduce((acc, prod) => acc += (prod.price * prod.cantidad), 0);

    this.totalSubject.next(total);
  }

}




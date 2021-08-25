import { Component, OnInit } from '@angular/core';
import { Tienda } from '../productos/interfaces/tienda.inteface'
import { TiendasService } from '../productos/services/tiendas.service';
import { switchMap, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Detalle, DetallePedido } from '../productos/interfaces/cesta.interface';
import { Producto } from '../productos/interfaces/producto.inteface';
import { CarritoService } from '../productos/services/carrito.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  model = {
    nombre: '',
    tienda: '',
    direccionEnvio: '',
    ciudad: ''
  }
  carrito: Producto[] = [];

  tiendas: Tienda[] = [];
  metodoRecogida: boolean = false;

  constructor(private tiendaService: TiendasService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getTiendas();
    this.recogerDatosCarrito();
    this.prepararDetalles();
  }


  recogida(valor: boolean): void {
    this.metodoRecogida = valor;
  }


  enviado({ value: DatosForm }: NgForm): void {
    console.log(DatosForm);
    const datos = {
      ...DatosForm,
      fecha: this.recuperarFecha(),
      metodoRecogida: this.metodoRecogida
    }

    this.tiendaService.guardarCesta(datos).pipe(
      tap(respuesta => console.log('pedido ->', respuesta)),
      switchMap((pedido) => {
        const idPedido = pedido.id;
        const detalle = this.prepararDetalles();
        return this.tiendaService.guardarDetalleCesta(detalle);
      }
      )).subscribe();
  }

  getTiendas(): void {
    this.tiendaService.getTiendas()
      .pipe(
        tap((tienda: Tienda[]) => this.tiendas = tienda)
      )
      .subscribe()
  }

  private recuperarFecha(): string {
    return new Date().toLocaleDateString();
  }

  private prepararDetalles(): DetallePedido[] {
    const detalle: DetallePedido[] = [];
    this.carrito.forEach((produ: Producto) => {

      const { id: idProducto, name: nombre, cantidad: cantidad, stock: stock } = produ;

      
    })

    return detalle;

  }

  private recogerDatosCarrito(): void {
    this.carritoService.carritoAction$.pipe(
      tap((prod: Producto[]) => this.carrito = prod)
    )
      .subscribe();
  }
  //Seguir 3.53.42 el video

}



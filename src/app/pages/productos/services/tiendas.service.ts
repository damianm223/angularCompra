import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle, DetallePedido, Pedido } from '../interfaces/cesta.interface';
import { Tienda } from '../interfaces/tienda.inteface';


@Injectable({
  providedIn: 'root'
})
export class TiendasService {
  private apiURL='http://localhost:3000';
  constructor(private http:HttpClient) { }

    getTiendas():Observable<Tienda[]>{
        return this.http.get<Tienda[]>(this.apiURL+'/stores');
    }


    guardarCesta(carrito:Pedido):Observable<Pedido>{
      return this.http.post<Pedido>(`${this.apiURL}/orders`,carrito);
    }

    guardarDetalleCesta(detalle:DetallePedido[]):Observable<DetallePedido[]>{
      return this.http.post<DetallePedido[]>(`${this.apiURL}/detailsOrders`,detalle);
    }

  

  


}

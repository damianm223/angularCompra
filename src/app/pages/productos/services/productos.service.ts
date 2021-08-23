import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.inteface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiURL='http://localhost:3000';
  constructor(private http:HttpClient) { }


  getProduct():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiURL+'/products');
  }

  


}

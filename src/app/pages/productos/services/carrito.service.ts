import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.inteface';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiURL='http://localhost:3000';
  constructor(private http:HttpClient) { }

/*Minuto 1:50:29 del video Dominicode*/



  


}



/*filemaker hacer api para que avise a los pacientes 24 horas antes 

se añada datos desde la app de la consulta */
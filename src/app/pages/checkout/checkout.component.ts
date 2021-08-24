import { Component, OnInit } from '@angular/core';
import { Tienda } from '../productos/interfaces/tienda.inteface'
import { TiendasService } from '../productos/services/tiendas.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  model={
    nombre:'',
    tienda:'',
    direccionEnvio:'',
    ciudad:''
  }

  tiendas:Tienda[]=[];


  constructor(private tiendaService:TiendasService) { }

  ngOnInit(): void {
    this.tiendaService.getTiendas()
      .pipe(
        tap((tienda: Tienda[]) => this.tiendas = tienda)
      )
      .subscribe()
  }


  recogidaTienda(valor:boolean):void{
    console.log(valor)
  }


  recogidaCasa(valor:boolean):void{
    console.log(valor)
  }

}



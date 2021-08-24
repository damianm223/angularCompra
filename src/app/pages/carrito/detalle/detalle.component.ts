import { Component } from "@angular/core";
import { CarritoService } from "../../productos/services/carrito.service";


@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls:['./detalle.component.css']

})

export class DetalleComponent {
    total$ = this.carritoService.totalAction$;
    carrito$ = this.carritoService.carritoAction$;
    constructor(private carritoService: CarritoService) {

    }
}
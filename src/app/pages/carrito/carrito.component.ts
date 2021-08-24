import { Component } from "@angular/core";
import { CarritoService } from '../productos/services/carrito.service';

@Component({
    selector: 'app-carrito',
    template: `
    <ng-container  *ngIf="{total: total$|async, cantidad:cantidad$ |async} as carritoData">
        <ng-container *ngIf="carritoData.total">
        <mat-icon>add_shopping_cart</mat-icon>
    {{carritoData.total|currency}}
    ({{carritoData.cantidad}})
        </ng-container>
    </ng-container>
    `
})

export class CarritoComponent {
    cantidad$ = this.carritoService.cantidadAction$;
    total$ = this.carritoService.totalAction$;
    carrito$ = this.carritoService.carritoAction$;
    constructor(private carritoService: CarritoService) {

    }
}
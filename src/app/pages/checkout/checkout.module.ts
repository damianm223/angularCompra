import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { DetalleComponent } from '../carrito/detalle/detalle.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CheckoutModule { }

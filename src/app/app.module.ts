import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//AÑADIDO POR NOSOTROS
import { MaterialModule } from './material.module';
import {HttpClientModule} from'@angular/common/http'
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DetalleComponent } from './pages/carrito/detalle/detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

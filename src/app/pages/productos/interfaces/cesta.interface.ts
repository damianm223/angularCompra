

/*
  "id": 1,
    "orderId": 1,
    "quantity": 10,
    "productName": "Product name" */



/* "id": 1,
        "name": "Dominicode",
        "date": "01/12/1995",
        "shippingAddress": "Av. de la Granvia de Hospitalet, 115",
        "city": "Barcelona",
        "pickup": true */


export interface Detalle {
    idProducto: number;
    nombre: string;
    cantidad: number;
}

export interface Pedido {
    nombre: string;
    direccionEnvio: string;
    ciudad: string;
    fecha: string;
    metodoEnvio: boolean;
    id: number;
}

export interface DetallePedido {
    detalle: Detalle[];
    orderId: number;
}
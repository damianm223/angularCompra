export interface Detalle {
    id: number,
    idPedido: number,
    cantidad: number,
    productName: string
}

/*
  "id": 1,
    "orderId": 1,
    "quantity": 10,
    "productName": "Product name" */

export interface Pedido {
    nombre: string,
    direccionEnvio: string,
    ciudad: string,
    fecha: string,
    metodoRecogida: boolean,
    id: number
}

/* "id": 1,
        "name": "Dominicode",
        "date": "01/12/1995",
        "shippingAddress": "Av. de la Granvia de Hospitalet, 115",
        "city": "Barcelona",
        "pickup": true */
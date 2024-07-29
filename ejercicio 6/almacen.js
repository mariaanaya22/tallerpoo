class Almacen {
    #CantidadStock
    constructor(codigoProducto, nombreProducto,cantidadStock){
        this.codigoProducto  = codigoProducto;
        this.nombreProducto = nombreProducto;
        this.#CantidadStock = cantidadStock;

    }

    agregarProductos(Cantidad){
        if(Cantidad > 0){
            this.#CantidadStock += Cantidad;
            return `Se han agregado ${Cantidad} unidades de "${this.nombreProducto}" al inventario del almacen.`;
    } else {return 'La cantidad para agregar debe ser mayor que cero.';}
        }

    retirarProductos(Cantidad){
        if (Cantidad > 0){
            this.#CantidadStock -= Cantidad;
            return `Se han agregado ${Cantidad} unidades de "${this.nombreProducto}" al inventario del almacen.`;
    } else {return 'La cantidad a agregar debe ser mayor que cero.';}}


mostrarstock(){
    return `Stock actual de "${this.nombreProducto}": ${this.#CantidadStock} unidades.`;
}

 
}
let producto1 = new  Almacen('000', 'Tornillitoss');
let producto2 = new Almacen('001', 'Clavitos');

console.log(producto1.mostrarstock());  
console.log(producto1.agregarProductos(50));  
console.log(producto1.mostrarstock());  
console.log(producto1.retirarProductos(20));
console.log(producto1.mostrarstock());  

console.log(producto2.mostrarstock());
console.log(producto2.agregarProductos(100));
console.log(producto2.mostrarstock());
console.log(producto2.retirarProductos(150));  
console.log(producto2.mostrarstock());

    

//encapsulamiento
class carrito {
    #VelocidadMaxima 
    #combustibleActual
    constructor(marca,modelo, velocidadMaxima,combustibleActual){
        this.marca = marca;
        this.modelo = modelo;
        this.#VelocidadMaxima = velocidadMaxima;
        this.#combustibleActual = combustibleActual;
    }
    acelerar(){
        if (this.#combustibleActual > 0){
            console.log("estamos bien"); // SI EL COMBUSTIBLE ES MAYOR A 0 MUESTRA EL "estamos bien"

        }else {
            console.log("estamos mal de el combustiblee");
        }
    }
    frenar(){
        console.log("estamos frenando");
    }
    aumentarCombustible(combustible){
        return `tanqueado completo de su tanques es ${this.#combustibleActual += combustible}`}  //hace una suma 
        
        #mostrarEstado(){
            console.log(`el vehiculo de marca ${this.marca} es modelo ${this.modelo} suvelocidad maxima es ${this.#VelocidadMaxima} su tanque esta en ${this.#combustibleActual} % `);
        }
        getEstado (){
            return this.#mostrarEstado()
        }
    }

    let objcarros = new carrito ("mercedez", "2025", 200, 20);
    objcarros.acelerar();
    objcarros.frenar();
    console.log(objcarros.aumentarCombustible(10));
    objcarros.getEstado()


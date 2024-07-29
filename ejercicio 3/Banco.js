// ENCAPSULAMIENTO
class Banco {
    #tipoCuenta
    constructor(nombreTitular, saldo, tipoCuenta){
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
        this.#tipoCuenta  = tipoCuenta;}

 depositar (monto){
    return this.saldo += monto   

 }

 retiro(monto){
    if (this.saldo > 0){
        return this.saldo - monto 
    }else {
    return "saldo insuficientee"
 }}

 mostrarSaldo(){
    console.log(this.saldo);
 }


#mostrarCuenta(){
    console.log(this.#mostrarCuenta);

}

getMostrarTipocuenta(){
    return this.#mostrarCuenta
}
}


let objpersonita = new  Banco ("maria" , 400000, "corriente")
console.log(objpersonita.depositar(10000));
console.log(objpersonita.retiro(2000));
objpersonita.getMostrarTipocuenta()
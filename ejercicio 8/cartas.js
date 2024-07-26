class Cartas {
    #baraja 
    #jugadores
    constructor(palo,valor){
        this.palo = palo;
        this.valor = valor;
        this.#baraja = [];
        this.#jugadores = [];

    }

    crearBaraja(){
        let palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
        let valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let baraja = [];
        for (let palo of palos) {
            for (let valor of valores) {
                baraja.push(new Cartas(palo, valor));}
            return baraja;}}


}

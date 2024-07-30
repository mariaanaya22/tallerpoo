//encapsulamiento
class Proyecto {
    #estado 
    
    constructor(nombreProyecto, fechaInicio, fechaFin) {
        this.nombreProyecto = nombreProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.#estado = "no iniciado"; // Inicializamos el estado como "no iniciado"
    }
  
    // Método para iniciar el proyecto
    iniciarProyecto() {
        this.#estado = "en progreso";
    }
  
    // Método para finalizar el proyecto
    finalizarProyecto() {
        this.#estado = "completado";
    }
  
    // Método para mostrar el estado del proyecto
    mostrarEstado() {
        return `El estado actual del proyecto "${this.nombreProyecto}" es "${this.#estado}".`;
    }
}


let proyecto1 = new Proyecto("Desarrollo de Aplicación wed", "2024-01-01", "2024-12-31");

console.log(proyecto1.mostrarEstado()); 
proyecto1.iniciarProyecto();
console.log(proyecto1.mostrarEstado()); 
proyecto1.finalizarProyecto();
console.log(proyecto1.mostrarEstado()); 

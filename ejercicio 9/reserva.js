class ReservaHotel {
    #habitacionAsignada; // Atributo privado

    constructor(nombreCliente, fechaReserva) {
        this.nombreCliente = nombreCliente; // Atributo público
        this.fechaReserva = fechaReserva;   // Atributo público
        this.#habitacionAsignada = "";      // Inicialmente, no hay habitación asignada
    }

    // Método para reservar una habitación
    reservarHabitacion(habitacionesDisponibles) {
        if (this.#habitacionAsignada !== "") {
            console.log("Ya tienes una habitación asignada.");
            return;
        }
        if (habitacionesDisponibles.length === 0) {
            console.log("No hay habitaciones disponibles.");
            return;
        }
        
        // Asignar la última habitación disponible
        this.#habitacionAsignada = habitacionesDisponibles.pop();
        console.log(`Habitación ${this.#habitacionAsignada} asignada a ${this.nombreCliente}.`);
    }

    // Método para cancelar la reserva
    cancelarReserva(habitacionesDisponibles) {
        if (this.#habitacionAsignada === "") {
            console.log("No tienes ninguna habitación asignada.");
            return;
        }
        
        // Devolver la habitación al listado de habitaciones disponibles
        habitacionesDisponibles.push(this.#habitacionAsignada);
        console.log(`Reserva cancelada. La habitación ${this.#habitacionAsignada} está disponible nuevamente.`);
        this.#habitacionAsignada = ""; // Restablecer a estado sin asignar
    }

    // Método para mostrar la reserva
    mostrarReserva() {
        if (this.#habitacionAsignada === "") {
            console.log(`No tienes ninguna habitación reservada.`);
            return;
        }
        console.log(`Cliente: ${this.nombreCliente}`);
        console.log(`Fecha de Reserva: ${this.fechaReserva}`);
        console.log(`Habitación Asignada: ${this.#habitacionAsignada}`);
    }
}

let habitacionesDisponibles = ['101', '102', '103', '104'];

let reserva = new ReservaHotel("Juan Pérez", "2024-08-15");

reserva.reservarHabitacion(habitacionesDisponibles);


reserva.mostrarReserva();

reserva.cancelarReserva(habitacionesDisponibles);


reserva.mostrarReserva();

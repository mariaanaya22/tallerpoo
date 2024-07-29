class Empleado {
    #salario; 
  
    constructor(nombre, apellido, cargo, salario) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.cargo = cargo;
      this.#salario = salario; 
    }
  
    // Método para calcular el sueldo 
    calcularSueldoNeto() {
      //un 20% de deducción por impuestos
      const deduccion = this.#salario * 0.20;
      const sueldoNeto = this.#salario - deduccion;
      return sueldoNeto;
    }
  
    // Método para mostrar los datos completos del empleado
    mostrarDatos() {
      const sueldoNeto = this.calcularSueldoNeto(); // Obtener el sueldo 
      return `Nombre: ${this.nombre} ${this.apellido}\nCargo: ${this.cargo}\nSalario Neto: ${sueldoNeto.toFixed(2)}`;
    }
  }
  
  
  const empleado1 = new Empleado('Juan', 'Pérezz', 'Desarrollador', 3000);
  const empleado2 = new Empleado('Anita', 'García', 'Gerente', 5000);
  
  console.log(empleado1.mostrarDatos());
  console.log(empleado2.mostrarDatos());
  
  
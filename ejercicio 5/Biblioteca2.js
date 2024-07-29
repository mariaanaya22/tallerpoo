class Libro {
  #disponible;
  
  constructor(titulo, autor, disponible) {
      this.titulo = titulo;
      this.autor = autor;
      this.#disponible = disponible;  
  }

  // Método para prestar el libro 
  prestarLibro() {
      if (this.#disponible.prestado === undefined) {
          this.#disponible.prestado = true;
          return `El libro "${this.titulo}" ha sido prestado.`; // Se corrigieron las comillas
      } else {
          return `El libro "${this.titulo}" no está disponible.`; // Se corrigieron las comillas
      }
  }

  // Método para devolver el libro
  devolverLibro() {
      this.#disponible = {}; // Se mantiene igual, pero podría ser mejor manejar el estado más explícitamente
      return `El libro "${this.titulo}" ha sido devuelto.`; // Se corrigieron las comillas
  }

  // Método para mostrar el estado del libro
  mostrarEstado() {
      if (this.#disponible.prestado === undefined) {
          return `El libro "${this.titulo}" está disponible.`; // Se corrigieron las comillas
      } else {
          return `El libro "${this.titulo}" ha sido prestado.`; // Se corrigieron las comillas
      }
  }

  _estadoDisponible() {
      return this.#disponible.prestado === undefined;
  }
}

class LibroDigital extends Libro {
  constructor(titulo, autor, formato, disponible) {
      super(titulo, autor, disponible);
      this.formato = formato;
  }

  mostrarEstado() {
      if (this._estadoDisponible()) {
          return `El libro digital "${this.titulo}" (${this.formato}) está disponible.`; // Se corrigieron las comillas
      } else {
          return `El libro digital "${this.titulo}" (${this.formato}) ha sido prestado.`; // Se corrigieron las comillas
      }
  }
}

let libro1 = new Libro('Luna Lunera', 'Maria Fernanda Anaya', {});
let libroDigital1 = new LibroDigital('2005', 'Mafesita', 'PDF', {});

console.log(libro1.mostrarEstado());  
console.log(libro1.prestarLibro());   
console.log(libro1.mostrarEstado()); 
console.log(libro1.devolverLibro());  
console.log(libro1.mostrarEstado());  

console.log(libroDigital1.mostrarEstado());  
console.log(libroDigital1.prestarLibro());   
console.log(libroDigital1.mostrarEstado());  
console.log(libroDigital1.devolverLibro()); 
console.log(libroDigital1.mostrarEstado());

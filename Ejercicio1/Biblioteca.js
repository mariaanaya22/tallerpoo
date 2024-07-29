// método de encapsulamiento
class Biblioteca {
    _titulo;  
    _artista; 
    #duracion; 
    canciones;
  
    constructor(titulo, artista, duracion ) {
      this._titulo = titulo;
      this._artista = artista;
      this.#duracion = duracion;
      this.canciones = [];
    }
  
    agregarCancion(titulo, artista, duracion) {
     let nuevaCancion = {
        titulo: titulo,
        artista: artista,
        duracion: duracion 
      };
      this.canciones.push(nuevaCancion);  
    }
  
    eliminarCancion(titulo) {  // metodo eliminar la cancion 
      let indice = this.canciones.findIndex(cancion => cancion.titulo.toLowerCase() === titulo.toLowerCase()); //busca la cancion
      if (indice !== -1) {  // busca su indice y si es negativo lanzara un mensaje de que no se encontro en la biblioteca 
        this.canciones.splice(indice, 1);
        console.log(`Canción "${titulo}" eliminada correctamente.`);
      } else {
        console.log(`La canción "${titulo}" no se encontró en la biblioteca.`);
      }
    }
  
    mostrarDetalles() { //Metodo para mostrar 
      console.log(`Duración: ${this.#duracion}`);  // realice un 
      
    }
  }
  
  let BibliotequitaMafe = new Biblioteca("Biblioteca de Mafe", "mafe", "3:45");
  
  BibliotequitaMafe.agregarCancion("Perfect", "Ed Sheeran", "4:25");  
  BibliotequitaMafe.mostrarDetalles(); 
  BibliotequitaMafe.eliminarCancion("Perfect"); // Debería eliminar la canción "Perfect"
  
 
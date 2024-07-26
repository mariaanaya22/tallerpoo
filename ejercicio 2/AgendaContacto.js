class Agenda{
    #contactos
    constructor( nombreAgenda){
     this.nombreAgenda = nombreAgenda;
     this.#contactos = [];
    }

    agregarContacto(contacto){
        this.#contactos.push(contacto);

    }

   editarContacto(posicion, nuevoValor){
    this.#contactos[posicion] = nuevoValor
  
    
   }  

  eliminarContacto(contactos){
   let dato = this.#contactos.indexOf(contactos) //indexof busca una palabra igual dentro de contactos 
   this.#contactos.splice(dato, 1) //splice es reemplazar 

  } 

mostrarContactos(){

        this.#contactos.forEach((contactos) => {
  console.log(contactos);
        })
  
        
}}


class contacto {
    constructor(nombre, apellido,telefono,correoElectronico){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
    }}

    // crear agenda
    
    let Agenda1 = new Agenda ("Agenda de mafe");
    //crear contacto
    let ContactoNuevo = new contacto ("luis", "rodriguez", "232", "hokalk,kns@.com")
// crear contactoNuevo a la agenda
    Agenda1.agregarContacto(ContactoNuevo)


    let ContactoNuevo2  = new contacto ("brayan", "anaya", "222", "holan@.com")
    Agenda1.agregarContacto(ContactoNuevo2)


    let contactico = new contacto ("juan", "berrio", "232", "jojksh@.com")
     //modificar contacto
    Agenda1.editarContacto(1,contactico);

// ELIMINAR
     Agenda1.eliminarContacto(ContactoNuevo);
     Agenda1.mostrarContactos()








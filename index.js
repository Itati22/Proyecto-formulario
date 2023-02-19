class Desarrollador extends Persona{

    constructor (nombre,edad, tipo){
        super(nombre, edad);
        this.tipo =tipo;
    }

    saludoDesarrollador(){
        this.saludar();
        console.log (`Soy una ${this.tipo} Developer`);
    }

}

let desarrollador = new Desarrollador('Itati', 23, 'Frontend');

desarrollador.saludoDesarrollador();
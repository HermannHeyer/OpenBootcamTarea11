class Persona {
 
    //metodo por defecto al momento de crear una clase
    //# private: Solo se puede acceder desde adentro de la clase
    // _ protected: Solo se puede acceder desde adentro de la clase y desde las clases desendientes

    #nombre
    #edad
    #isDeveloper
    constructor(nombre,edad,isDeveloper){
        
        // this es una palabra reserveda que hace referencia al objeto
        this.#nombre = nombre
        this.#edad = edad
        this.#isDeveloper = isDeveloper
    }
    saludo(){
        console.log(`Hola Mi nombre es:  ${this.#nombre} y mi edad es:  ${this.#edad}`)
    }
    getNombre(){
        return this.#nombre
    }
    getEdad(){
        return this.#edad
    }
    getIsDeveloper(){
        return this.#isDeveloper
    }
    
    setEdad(edad){
        this.#edad = edad;
       
    }
}

const nueva_persona = new Persona("Hermann",32,true)
nueva_persona.saludo()

//Getter & Setter son metodos 
//Getter nos permite obtener metodos privados y protegidos 
//setter nos permite modificar sus valores
nueva_persona.setEdad(21)
console.log(nueva_persona.getEdad())

class Desarrollador extends Persona{
    #lenguaje

    constructor(nombre,edad,lenguaje){
        /*Super(): La clase padre ya tiene un constructor
        para ello debemos llamar al constructor de la clase padre
        con la palabra reservada super()
        */
       super(nombre,edad)
       this.#lenguaje = lenguaje

       /*Polimorfismo: poli viene de muchos y morfismo que viene de formas
        Las clases pueden tomar diferentes formas, podemos volver a definir
        un metodo
       */
    }
    //el definir un metodo se llama Override
    getLenguaje(){
        return this.#lenguaje
    }

    setLenuaje(lenguaje){
        this.#lenguaje = lenguaje;
       
    }

    saludo(){
        super.saludo()
        console.log(`y Soy Desarrollador ${this.#lenguaje}`)
    }

}
console.log("------Herencia----")
const des = new Desarrollador("Hermann",32,"JavaScript")
console.log(des.saludo())


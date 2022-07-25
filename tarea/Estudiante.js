class Estudiante{

    nombre
    asignatura

    constructor(nombre,asignatura){
        this.nombre = nombre
        this.asignatura = asignatura
    }

  
    obtenerDatos(){
        console.log(`Hola Mi nombre es:  ${this.nombre} y las asignaturas Son ${this.asignatura}`)

    }

}

const est = new Estudiante("Hermann Heyer","Javascript, HTML, CSS")
const datos = est.obtenerDatos()

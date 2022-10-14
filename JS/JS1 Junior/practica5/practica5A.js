//Para aprobar se necesita al menos 90% de asistencias ///COMPLETADO
//Promedio por materia de al menos 7 de 10 ///COMPLETADO
//Minimo de 75% de los trabajos practicos entregados //Completado
//----------------------------------------------------
//Esto es una manera de aplicarlo, en el siguiente lo hago evaluando una base de datos

const semestre = 129;
const asistenciasNecesarias = 116;

//const alumnos = ["Juan", " Ana", " Milagros", " Josefina"]

var trabajosHistoria = ["Trabajo Practico 1", "Trabajo Practico 2", "Trabajo Practico 3", "Trabajo Practico 4", "Trabajo Practico 5", 
"Trabajo Practico 6", "Trabajo Practico 7", "Trabajo Practico 8", "Trabajo Practico 9", "Trabajo Practico 10", "Trabajo Practico 11", ]

var trabajosFisica = ["Trabajo Practico 1", "Trabajo Practico 2", "Trabajo Practico 3", "Trabajo Practico 4", "Trabajo Practico 5", 
"Trabajo Practico 6", "Trabajo Practico 7", "Trabajo Practico 8", "Trabajo Practico 9", "Trabajo Practico 10", "Trabajo Practico 11", ]

alumno = prompt(`Nombre`);
asistencias = prompt(`Asistencias`);

if (asistencias < asistenciasNecesarias) {
        alert (`${alumno} no cumplio con las asistencias necesarias, vino ${asistencias} veces`)
} else if (asistencias >= asistenciasNecesarias) {
        alert (`${alumno} cumplio con las asistencias necesarias, vino ${asistencias} veces`)
}
//---------------------------------------------------------------------------------------------------------------------------------------
let nota = prompt (`Suma total de las notas`)
let examenes = prompt (`Cantidad de examenes`)

let promedio = nota / examenes;

if (promedio < 7) {
    alert(`Esta reprobado`);
} else if (promedio >= 7) {
    alert(`Esta aprobado`);
}
//---------------------------------------------------------------------------------------------------------------------------------------

let trabajosEntregadosHistoria = prompt (`Trabajos entregados`)

if (trabajosEntregados < 8) {
    alert(`Te faltan ` + (trabajosHistoria.length-trabajosEntregadosHistoria) + ` por entregar`)
} else if (trabajosEntregados >=8) {
    alert(`Cumpliste con la entrega de trabajos`)
}

let trabajosEntregadosFisica = prompt (`Trabajos entregados`)

if (trabajosEntregados < 8) {
    alert(`Te faltan ` + (trabajosFisica.length-trabajosEntregadosFisica) + ` por entregar`)
} else if (trabajosEntregados >=8) {
    alert(`Cumpliste con la entrega de trabajos`)
}
//---------------------------------------------------------------------------------------------------------------------------------------
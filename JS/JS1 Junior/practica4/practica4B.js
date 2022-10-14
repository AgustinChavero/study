//Crear funcion que al pasar como parametro la materia no devuelva:
//    Profesor asignado
//    Nombre de los alumnos //Completado
//Tambien crear una funcion que nos indique en cuantas clases esta cofla
//    Nombre de esas clases y sus profesores //Completado
//----------------------------------------------------------------------


const contenedorInformacion = (materia)=>{
    materias = { //Primer elemento es el profesor
        historia: ["Hernandez", "Juan", " Ana", " Milagros", " Josefina"],
        fisica: ["Martinez", "Juan", " Jose", " Fernando", " Maria", " Rocio"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const obtenerInformacion = (materia)=>{
    let informacion = contenedorInformacion(materia);

    if (informacion !== false) {
        let profesor = contenedorInformacion(materia)[0][0];
        alumnos = contenedorInformacion(materia)[0];
        alumnos.shift();
        document.write(`<br>El profesor de ${informacion[1]} es ${profesor}<br>`)
        document.write(`Los alumnos son: ${alumnos}<br>`)
    }
}
const cantidadDeClases = (alumno)=>{
    let informacion = contenedorInformacion();
    let clasesCursando = [];
    let cursando = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
             cursando++;
             clasesCursando.push(" " + info);
        }
    }
    return `<br>${alumno} esta cursando ${cursando} clases: ${clasesCursando}<br>`
}

obtenerInformacion("historia");
obtenerInformacion("fisica");

document.write(cantidadDeClases("Juan"));
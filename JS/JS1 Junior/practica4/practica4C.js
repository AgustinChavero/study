//Crear una funcion para preguntar en que materia quieren inscribirse
//    Si ya hay 20 inscriptos, negar la inscripcion
//    Si hay menos, habilitarlo
//--------------------------------------------------------------------


var materias = { //Primer elemento es el profesor
    historia: ["Hernandez", "Juan", " Ana", " Milagros", " Josefina"],
    fisica: ["Martinez", "Juan", " Jose", " Fernando", " Maria", " Rocio"]
}
const inscribirse = (materia, alumno)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Las clases de ${materia} ya estan llenas`)
    } else {
        personas.push(alumno);
        if (materia == "historia"){
            materias = {
                historia: personas,
                fisica: materias[`fisica`]
            }
        } else if (materia == "fisica"){
            materias = {
                historia: materias[`historia`],
                fisica: personas
            }
        }
        document.write (`${alumno} incripto a ${materia}`)
    }
}

document.write(materias[`historia`] + "<br>")

inscribirse("historia", "Raul");

document.write("<br>" + materias[`historia`])
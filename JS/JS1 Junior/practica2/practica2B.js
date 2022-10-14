//Crear sistema que nos permita registrar alumnos
    //presentes (P) y ausentes (A)
//Pasados los 30 dias mostrar la situacion final
    //de todos, con los P y los A
//Se puede tener un maximo de 10% de ausencias
    //por semestre, si se excede ello reprueban
//-------------------------------------

//----------------
function x () {



var mes = 3;
//var limiteAusencias = 13;

var lista = [
    Javier = ["Javier", 0, 0],
    Juan = ["Juan", 0, 0],
    Ana = ["Ana", 0, 0], 
  //  Milagros = ["Milagros", Presentes= 0, Ausentes= 0],
  //  Pilar = ["Pilar", Presentes= 0, Ausentes= 0],
  //  Martin = ["Martin", Presentes= 0, Ausentes= 0],
  //  Lucas = ["Lucas", Presentes= 0, Ausentes= 0],
  //  Maria = ["Maria", Presentes= 0, Ausentes= 0],
  //  Sofia = ["Sofia", Presentes= 0, Ausentes= 0],
  //  Rocio = ["Rocio", Presentes= 0, Ausentes= 0],
] //[Nombre = [Presentes[0], Ausentes[0]]]

for (var i = 0 ; i < mes; i++) {
    for (var i = 0 ; i < lista.length; i++) {
        var pasarLista = prompt (lista[i][0]);
        if (pasarLista == "Presente" || pasarLista == "P") {
            lista[i][1] + 1;
        } else if (pasarLista == "Ausente" || pasarLista == "A") {
            lista[i][2] + 1;
        }
    }
}
}

x();



//for (var i = 0 ; i < lista.length ; i++) {
//    if (lista[i][2] > limiteAusencias) {
//        alert ("Estas reprobado")
//    } else {
//        alert ("Cumplio con las asistencias")
//    }
//}

//----------------

//let alumnos = prompt ("Cantidad de alumnos");
//let listaPA = [];

//for (var i = 0 ; i < alumnos ; i++) {
//    listaPA [i] = [prompt("Nombre " + (i+1)), 0];
//}

//const pasarLista = (nombre, p)=>{
//    let presencia = prompt (nombre);
//    if (presencia == "P") {
//        listaPA[i][1]++;
//    }
//}  

//for (var i= 0 ; i < 30 ; i++) {
//    for (alumno in listaPA) {
//        pasarLista(listaPA[alumno][0], alumno);
//    }
//}
 
//Para aprobar se necesita al menos 90% de asistencias
//Promedio por materia de al menos 7 de 10
//Minimo de 75% de los trabajos practicos entregados
//----------------------------------------------------------------------------------------------------
//Hecho con base de datos integrada

const materias = { //1ero: % asistencia // 2do: promedio // 3ro: cantidad de trabajos
    fisica: [90,6,3, "fisica"],
    historia: [80,10,4, "historia"],
    ingles: [65,7,2, "ingles"],
    programacion: [75,5,4, "programacion"],
}

const aprobo = ()=>{
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencia >= 90) {
            console.log("%c Asistencias completas", "color:green");
        } else {
            console.log("%c Asistencias incompletas", "color:red");
        }
        if (promedio >= 7) {
            console.log("%c Promedio aprobado", "color:green");
        } else {
            console.log("%c Promedio desaprobado", "color:red");
        }
        if (trabajos >= 3) {
            console.log("%c Trabajos entregados", "color:green");
        } else {
            console.log("%c Trabajos no entregados", "color:red");
        }
    }
}

aprobo();
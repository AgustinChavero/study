//Organizar diariamente las tareas
//Utilizar la consola para organizarlo
//Cada tarea no debe superar las 4hs
//---------------------------------------


let trabajo = "240 minutos para trabajar";
let estudio = "100 minutos para estudiar";
let tp = "100 minutos para hacer practicos";
let homework = "30 minutos para tareas de casa";
let descanso = "10 minutos de descanso";

console.log("Tareas")

for (var i = 0; i < 14; i++){
    if (i == 0) {
        console.group("Semana 1");
    }
    console.groupCollapsed("dia " + (i+1));
    console.log(trabajo);
    console.log(estudio);
    console.log(descanso);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 7) {
        console.groupEnd();
        console.group("Semana 2");
    }
}
console.groupEnd();
console.groupEnd(); 

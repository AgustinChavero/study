let alumnos = [
    {nombre: "Ignacio Rushel",
    email: "ignaciorushel@gmail.com",
    materia: "Fisica 3"},
    {nombre: "Karen Guerra",
    email: "karenguerra@gmail.com",
    materia: "Matematicas 2"},
    {nombre: "Roberto Soldado",
    email: "robertosoldado@gmail.com",
    materia: "Quimica"},
    {nombre: "Antonio Conte",
    email: "antonioconte@gmail.com",
    materia: "Tactica 1"},
    {nombre: "Diego Simeone",
    email: "diegosimeone@gmail.com",
    materia: "Adaptabilida 0"}
];
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
            <div class="grid-item nombre">${nombre}</div>
            <div class="grid-item email">${email}</div>
            <div class="grid-item materia">${materia}</div>
            <div class="grid-item semana">
                <select class="semana-elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
            </div>`;
    contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click",()=>{
    let confirmar = confirm ("¿Seguro?");
    if (confirmar) {
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})
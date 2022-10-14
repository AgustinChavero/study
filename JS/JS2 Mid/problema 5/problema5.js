// Buscar saber cuantas personas cursan el 
//     semestre con una appi
//     
//     Crear un sistema para obtener la info
//     Mostrar ordenadamente en un sitio web
// 
// Hace falta un servidor*



//Todo esto (documentos de la carpeta problema5)
    // debe ser trasladado a la carpeta HTDOCS de XAMPP
    // de lo contrario no se ejecutara de la forma correcta

const getInfo = async ()=> {
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try {
        resultado = await axios("informacion.txt")
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch(e){
        aprobados.innerHTML = "Failed";
        desaprobados.innerHTML = "Failed";
    }
}
document.getElementById("getInfo").addEventListener("click", getInfo);


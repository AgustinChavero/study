//BUCLES
//----------------------------------------------------
// El while es un bucle infinito que se ejecuta 
// si se cumple determinada condicion, cuando ya no existe
// dicha condicion, se deja de ejecutar
while (1 < 6) {
    document.write()
};
// Con el Do lo primero que se hace es colocar el codigo
// de ejecucion y luego poner la condicion de parate en el while
do {
    suma = i + 1;
} while (i >= 20) 
//For in
//En el for in, que se utiliza usualmente para iterar objetos
//se mostrara el indice
for (indice in contenedor) {
    document.write(indice);
}
//For of, este mostrara el valor de los elementos
for (indice of contenedor) {
    document.write(indice)
}
//Label
//Una sentencia que nos permite asociar un bucle a un nombre
//para poder terminarlo cuando queramos
//En este caso recorremos un array con otro array dentro, si el valor
//del array es ese array, pasamos a iterarlo, sino seguimos en el 
//mismo array. 
forEjemplo:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            //continue
            break forEjemplo;
        } document.write(array);
    } else {
        document.write(array2[array]);
    }
}
//Pero si queremos cortar todo en ese momento o saltarlo
//colocamos la condicion en ese for
//----------------------------------------------------
//FUNCIONES-CALLBACK
//Codigo de informacion que puede ser reutilizado 

function nombre (x, y) {
    if (x = y) {
        return "ok";
    }
}

nombre();

//De esta manera lo estamos reutilizando, y estamos citando un 
//CallBack

//Parametros
//La funcion trabajara en base a los parametros pasados y reinvocados
//para formar la funcion

function saludar (nombre) {
    let frase = 'Hola ' + nombre + '¿como estas?';
    document.write(frase)
}
saludar ("Peter")

const saludar = function (nombre) {
    //Otra variable de escritura
}

//Funcion flecha
//Se vera mas adelante

const saludar = (nombre)=>{
    //Si solamente usamos un parametro no hace falta el parentesis

}

//----------------------------------------------------

//POO Programacion Orientada a Objetos
//En POO usar const en lugar de let

class animal {
    constructor (especie, edad, nombre) {
        this.especie = especie;
        this.edad = edad;
        this.nombre = nombre;
        this.info = 'Me llamo' + this.nombre + 'mi edad es' + this.edad +
            'años y soy un' + this.especie; 
            //Lo ultimo corresponde a una funcion para devolver la informacion
    }
}

const perro1 = new animal ("canino", 4, "tucumano"); //Los valores corresponden al orden de los parametros previamente establecidos

//Metodo
//Se refiere a una funcion colocada dentro de una clase u objeto

class animal {
    constructor (especie, edad, nombre) {
        this.especie = especie;
        this.edad = edad;
        this.nombre = nombre;
        this.info = 'Me llamo' + this.nombre + 'mi edad es' + this.edad +
            'años y soy un' + this.especie; 
        this.verInfo = function() { //Esto es un metodo
            //Las funciones flechas no son utilizables como metodos
            document.write(this.info)
        }
    }
}

//Caracteristicas 
//Abstraccion = Reducimos la cantidad de parametros de un objeto todo lo que podamos
//Modularidad = Resolver un problema grande separandolos por partes
//Encapsulamiento = Encapsular los datos para que el usuario ajeno no pueda acceder de manera facil
//Polimorfismo = Capacidad de un objeto a comportarse distinto a un objeto por su parametros

//Herencia
class Perro extends animal {
    constructor (especie, edad, nombre) {
        super (especie, edad, nombre);
        this.raza = raza;
    }
    ladrar () {
        alert ("ladra")
    }
}
//Perro esta heredando todo lo anteriormente estaclecido de si mismo, mas lo que se le agrega que es raza

const perro2 = new Perro ("canino", 3, "TukiTuki", "Doberman")
//Si quisieramos modificar algo del perro1 tendriamos que hacer una variable para tener valores alterables
perro.ladrar (); 
gato.ladrar (); 

//Metodos estaticos
//Sin estar definido el objeto se podria utilizar de igual forma el 
//metodo mediante static
//*Recordar que el perro esta definido en renglon 133 o 96

class Perro extends animal {
    constructor (especie, edad, nombre) {
        super (especie, edad, nombre);
        this.raza = raza;
    }
    static ladrar () {
        alert ("ladra")
    }
}
//Entonces de esta maner, si no estuviera definido anteriormente perro
//Igual se ejecutaria el metodo
perro.ladrar();

//----------------------------------------------------

//Metodos accesores 
//Get -  Set - Utilizados para modificar valores de los parametros

//set setNombre (nuevoParametro) {this.parametro = nuevoParametro}
//perro.setNombre = "nuevoValor" dando asi un nuevo valor

//get getNombre {return this.parametro}
//document.write(objeto.getNombre) asi obtenemos el valor

//----------------------------------------------------

            //Metodos de Cadenas

let cadena = "cadena de prueba";
let cadena2 = " otra cadena"

//concat () junta una o mas cadenas
resultado = cadena.concat(cadena2);
document.write(resultado);
    //de esta manera quedan juntas ambas cadenas, tambien se puede agregar
    //otro tipo de dato dentro del parentesis de concat en lugar de una variable

//startsWith() verifica si una cadena comienza con los caracteres de otra
resultado = cadena.startsWith(cadena2); //dara false
//endsWith() lo mismo que el anterior pero si termina de esa manera

//includes() verifica si esta incluido una parte de la cadena en otra o un nuevo parametro colocado entre los parentesis
//Este devolvera true o false 

//indexOf() devulve la posicion en la que se encuentra el elemento
//Devolvera el numero de su posicion o -1 si no lo encuentra

//lastIndexOf() devolvera la ultima posicion, recorre de atras para delante

//Revisar si estas son oficiales a dia de hoy

//padStart() rellenara una cadena con lo que contenga el parentesis
    let cadenaRandom = "abc"
    relleno = cadenaRandom.padStart(10, "a"); 
    //rellenara hasta que llegue a 10 elementos (10,
    //y lo hara desde el principio con el elemen     "a")

//repeat() repitira la cadena la cantidad de veces que indiquemos

//split() divide la cadena como pidamos en el parentesis
//sin espacio, con comas, o con espacios
//Si indicamos una palabra dentro de la cadena la eliminara

//substring() nos devuelve un string recortado desde donde queramos

    let cadenaRandom2 = "ABCDEFG"
    cortado = cadenaRandom2.substring (0, 3) // del 0 al 3 devuelve ADCD

//toLowerCase() convierte todo lo seleccionado a minuscula
//toUpperCase() convierte todo lo seleccionado a mayuscula

//toString() convierte un valor en un string

//trim() elimina espacios
//trimEnd() elimina espacios del final
//trimStart() elimina espacios del inicio

//----------------------------------------------------

//Metodos de Arrays

array = [];

            //Transformadores


array.pop() //elimina el ultimo elemento

array.shift() // elimina el primer elemento

array.push() // agrega un elemento al final

array.reverse()// invierte el orden

array.unshift() // agrega un elemento al inicio

array.sort() // ordena los elementos alfabeticamente o de mayor a menor

array.splice(0, 2, "Reemplazo") // elimina cierta cantidad de elementos, marcando inicio y final
    //primero se coloca donde arranca y marca cuantos elimina
    //y ademas se puede agregar que se quiere reemplazar por esos elmeentos
            

            //Accesores


array.join("") // uno los elementos o arrays
    //funciona como concat, si queremos que los separe con algo lo
    //colocamos entre comillas

array.slice(0, 5); // devuelve un conjunto de elementos que marcamos

//Ya vistos = toString() indexOf() lastIndexOf() includes()

            //De Repeticion
array.filter(); //crea un nuevo array con todos los elementos que cumplan
    //la condicion de filtro
    array.filter(function(elemento) {
        document.write(elemento)
    })  // Esta es otra forma de escritura
        //Funciona como un metodo

    nuevoArray = array.filter(elemento => array.length > condicionDeFiltro)
    //Esta es otra forma de escritura
    //Aca se preguntra si el elemento de la iteracion cumple con la condicion de filtro


array.forEach(function(elemento) {
    document.write(elemento)
}); //Ejecuta una funcion indicada una vez por cada elemento del array



//----------------------------------------------------

                //Metodo Math

var buscaloVos = esUnaBoludes;

//sqrt() cbrt() max() min() random() round () fround() floor() trunc()


//----------------------------------------------------

                //Consola
//Se puede ejercer tanto en el console de la pagina web como aca

//Funciones de Registro

console.assert() // Muestra mensaje de error si la afirmacion es falsa

console.clear() // Limpia la bandeja de texto

console.error() // Emite un mensaje de error

console.info() // Muestra un mensaje informativo

console.log() //Muestra un mensaje en la consolta o interprete

console.table() // Toma un array u objeto y nos muestra una tabla

console.warn() // Imprime un mensaje de advertencia

console.dir() // Despliega una lista interactica de las propiedaddes
//del objeto especificado

//Funciones de conteo

console.count() // Registra el numero de veces que se llama a count.
//toma como argumento adicional una etiqueta

console.countReset() // Resetea el contador anterior

//Funciones de agrupacion

console.group() // Crea un grupo en linea en el registro de la consola

console.groupEnd() // Remueve un grupo en linea en el registro

console.groupCollapsed() // Crea un grupo en linea pero no dezplegado

//Funciones de temporizacion

console.time() // Inicia un temporizador

console.timeLog() // Muestra el conteo

console.timeEnd() // Lo detiene

//----------------------------------------------------
//En esta parte se enseña a modificar los elementos a traves de JS
// tanto su apariencia como su interaccion

                    //DOM

//Nodo
    //Cualquier etiqueta html 
        //Document: el nodo docu es el nodo raiz, del cual deriva el resto 
        //Element: nodos definidos por etiquetas
        //Text: texto dentro de un nodo element que se considera un nodo hijo tipo texto
        //Attribute: atributos de las etiquetas que definen nodos
        //Comentarios y otros: elementos como declaraciones doctype en cabecera


//Document - Metodos de seleccion de elementos

document.getElementById("nombre");
    parrafo = document.getElementById("nombre");
    document.write(parrafo) //Seleccionamos un objeto entero

document.getElementsByTagName("elemento"); //Seleccionamos elementos
    //como por ejemplo los p 
document.querySelector(".elemento") //Seleccionamos una clase
document.querySelector("#elemento") //Seleccionamos un ID

document.querySelectorAll("")   //Seleccionamos el mismo tipo de clase
    document.write(elemento[5]) //sin importar cuantos sean
    //se puede marcar el elemento especifico en []

//Metodos para definir, obtener y eliminar atributos

//<input type="type" class="clase"> Este seria el elemento en HTML
var clase = document.querySelector(".clase"); //Seleccionamos la clase para aplicar cambios
    clase.setAttribute("type", "text") //Le decimos el atributo y que caracteristica cambiar

    document.write(clase.getAttribute("type")) //Obtenemos el valor
    var data = clase.getAttribute("type") //Otra forma de escritura

    var dataEliminada = clase.removeAttribute("type") //De esta forma eliminamos un atributo

//Atributos globales

    //<h1 class="clase"> UN TITULO </h1>

    //contenteditable = indica si el elemento es modificable
        var clase = document.querySelector(".clase")

        clase.setAttribute("contentEditable", "true")
        clase.setAttribute("contentEditable", "false")
            //Como se ve trabajo con un valor booleano

    //dir = indica direccionalidad
        clase.setAttribute("dir", "rtl") //indica direccion del texto 
        //Right to Left o Left to Right

    //hidden = indica si el es o no relevante
        clase.setAttribute("hidden", "true") //Oculta o no un elemento
        //tambien se puede realizar desde el HTML colocando simplemente hidden="" como atributo
    
    //tabinex = indica si el elemento puede obtener un focus de input
        clase.setAttribute("tabindex", "3")
        //Simplemente agrega un focus al texto

    //title = contiene un texto con informacion relacionada al elemento
        clase.setAttribute("tittle", "nuevoTitulo")
        //Agrega un nuevo titulo

    //style = contiene delcaraciones de css

        //Sigue en Atributo Style


//Atributo de Inputs

//<input type="type" class="clase" value="valor"> 

    //className
        var input = document.querySelector(".clase")
        document.write(input.className) //Mostrara el class
    //value
        document.write(input.value = "nuevoValor")
        input.valor = "nuevoValor"
    //type
        document.write(input.type = "nuevoContenido")
        input.type = "nuevoContenido"
    //accept //<input type="file"
        input.accept = "image/png"
    //form
        //<form id="formulario"><input type="x" name=""></form>
        //<input type="submit" form="formulario">

        //Esto nos permite colocar un input por fuera del form citandolo en el input

    //minLength
        input.minLength = "4"; //establece el limite de caracteres
        input.setAttribute("minLength", "4"); 
    //placeholder
        input.placeholder = "texto dentro del input"
    //required
        input.required = "marca si es un campo requerido poniendo cualquier cosa"
 
    
//Atributo Style

    titulo.style.color = "color" //modificamos el color
    //podemos mezclar la citacion de propiedades con css
    titulo.backgroundColor = "color"


//Clases, classList y metodos de classList
 

    //add() = añade una clase
    var h1 = document.querySelector(".h1");
        h1.classList.add("x")
    //remove() = remueve una clase
        h1.classList.remove("x")
    //item() = devuelve la calse del indince especificado
        h1.classList.item("x")
    //contains() = verifica si ese elemento posee o no la clase
        h1.classList.contains("x")
    //replace() = reemplaza una clase por otra
        h1.classList.replace("x")
    //toggle() = si no tiene la clase, la agrega
        h1.classList.toggle("x")

//Obtencion y modificacion de elementos

    //textContent = devuelve el texto de cualquier nodo 
    //innetHTML = devuelve el contenido html de un elemento
    var elemento = document.querySelector(".clase");
        var resultado = elemento.innerHTML;
        alert (resultado); //esta manera se puede aplicar al resto
    //outerHTML = devuelve el codigo html completo del elemento

//Creacion de elementos

    //createElement()
        var elemento = document.querySelector(".clase");
        var item = document.createElement("LI"); //siempre colocar los elementos en mayusculas
        document.write(item);
    //createTextNode()
        var textItem = document.createTextNode("Texto")
        item.appendChild(textItem); //de esta manera agregamos un child a un elemento
            console.log(item)
    //createDocumentFragment() util para crear elementos en masa
        var elemento2 = document.createDocumentFragment();
        for (i=0 ; i < 20; i++){ //de esta manera generamos hasta un limite de 20 veces
            var item =document.createElement("LI");
            item.innerHTML = "Texto";
            elemento.appendChild(item);
        }
        elemento.appendChild(elemento2) //recordemos que el elemento
        //del principio se refiere al contenedor del hijo que se esta agregando

//Obtencion y modificacion de Childs

    //firstChild
        var elemento = document.querySelector(".clase");
        var primerHijo = elemento.firstChild;
            console.log(primerHijo); 
    //lastChild
    //firstElementChild = mostrara un elemento HTML
    //lastElementChild
    //childNodes = devolvera toda la lista de nodos, como un array de todo lo que contiene
        var elemento = document.querySelector(".clase");
        var elementosHijos = elemento.childNodes; //console.log(elementosHijos)
        elementosHijos.forEach(hijo => console.log(hijos));
    //children = igual que el anterior desde la forma de aplicarlo pero se recorre con un for of

//Metodos de Childs

    //appendChild() = ya lo vimos mas arriba
    //replaceChild()
        var elementoContenedor = document.querySelector(".clase");
            var elemento1 = document.createElement("X").innerHTML = "Texto";
            var elementoNuevo = document.createElement("Y"); //si queremos agregar un inner tenemos que hacerlo por fuera sino no se reemplaza
        elementoViejo = document.querySelector(".clase");
        elementoContenedor.replaceChild(elementoNuevo, elementoViejo)
    //removeChild() = misma forma que el anterior
    //hasChildNodes() 
        var verificacion = elementoContenedor.hasChildNodes();
            if (verificacion) {
                document.write("Si tiene")
            } else {document.write("No tiene")};

//Propiedades de parents

    //parentElement = elije el padre elemento de un elemento
            console.log(elementoContenedor.parentElement);
    //parentNode = elije el padre de un elemento
            console.log(elementoContenedor.parentNode);

//Propiedades de Siblings (Hermanos)

    //nextSibling
            console.log(elementoViejo.nextSibling);
    //previousSibling
    //nextElementSibling
            console.log(elementoViejo.nextElementSibling);
    //previousElementSibling

//----------------------------------------------------





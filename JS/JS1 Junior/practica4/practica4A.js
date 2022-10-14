//Crear una calculadora que calcule potencias, raices cuadradas y cubicas
//    ademas de lo basico como sumar, restar, dividir y multiplicar
//------------------------------------------------------------------------

class Calculadora {
    constructor() {}
    sumar(num1, num2) {
        return parseInt(num1) + parseInt (num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt (num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt (num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt (num2);
    }
    potencia(num1, exp) {
        return num1**exp;
    }
    raizCuadrada(num1) {
        return Math.sqrt(num1);
    }
    raizCubica(num1) {
        return Math.cbrt(num1);
    }
}
const calculadora = new Calculadora();

alert("Elije operacion matematica")
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5: potenciar, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("Primer numero de suma");
    let numero2 = prompt("Segundo numero de suma");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 2) {
    let numero1 = prompt("Primer numero de resta");
    let numero2 = prompt("Segundo numero de resta");
    resultado = calculadora.restar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 3) {
    let numero1 = prompt("Primer numero de multiplicacion");
    let numero2 = prompt("Segundo numero de multiplicacion");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 4) {
    let numero1 = prompt("Primer numero de division");
    let numero2 = prompt("Segundo numero de division");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 5) {
    let numero1 = prompt("Numero a elevar");
    let exponente = prompt("Exponente");
    resultado = calculadora.potencia(numero1, exponente);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 6) {
    let numero1 = prompt("Raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 7) {
    let numero1 = prompt("Raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`El resultado es ${resultado}`);
} 
//const palitoAgua = ["palito de agua", 0.6]
//const palitoCrema = ["palito de crema", 1];
//const bombonHeladix = ["bombon heladix", 1.6];
//const bombonHeladovich = ["bombon heladovich", 1.7]
//const bombonHeraldo = ["bombon heraldo", 1.8]
//const poteHeladoConfites = ["pote de helado con confites", 2.9]
//const poteUnCuarto = ["pote de un cuarto", 2.9]


//if (dineroCofla >= 1) {
//    alert ("Cofla puede comprar un " + palitoCrema[0] + " o un " + palitoAgua[0]);
//} else if (dineroCofla >= 1.6 && dineroCofla <= 1.8) {
//    alert ("Cofla puede comprar un " + bombonHeladix[0] + " o un " + bombonHeladovich[0] + "sino un " + bombonHeraldo[0]);
//} else if (dineroCofla > 2.8) {
//    alert ("Cofla puede comprar un " + poteHeladoConfites[0] + " o un " + poteUnCuarto[0])
//}


var dineroRoberto = prompt ("¿Cuanto tenes Roberto?"); 


if (dineroRoberto >= 0.6 && dineroRoberto <1) {
    alert ("Roberto, te alcanza para un palito de agua");
    alert ("Tu vuelto es de " + (dineroRoberto - 0.6))
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert ("Roberto, te podes comprar un palito de crema");
    alert ("Tu vuelto es de " + (dineroRoberto - 1))
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert ("Roberto, te podes comprar un heladix");
    alert ("Tu vuelto es de " + (dineroRoberto - 1.6))
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert ("Roberto, te podes comprar un heladovich");
    alert ("Tu vuelto es de " + (dineroRoberto - 1.7))
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert ("Roberto, te podes comprar un heraldo");
    alert ("Tu vuelto es de " + (dineroRoberto - 1.8))
} else if (dineroRoberto >= 2.9) {
    alert ("Roberto, te podes comprar un helado con confites o un pote 1/4");
    alert ("Tu vuelto es de " + (dineroRoberto - 2.9))
}






//A) 3 chicos entran a una heladeria a comprar helado pero los precios no estan en cada estante respectivo.

//Roberto tiene $1.5 usd
//Pedro tiene $1.7 usd
//Cofla tiene $3 usd

//Los precios de helados son lo siguientes:
//Palito de helado de agua: $0.6 usd
//Palito de helado de crema: $1 usd
//Bombon helado marca heladix: $1.6 usd
//Bombon helado marca heladovich: $1.7 usd
//Bombon helado marca heraldo: $1.8 usd
//Potecito de helado con confites: $2.9 usd
//Pote de 1/4 kg: $2.9 usd

//Crear soluciones 

//	-Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro
//	-Si hay 2 o mas con el mismo precio, mostrar ambos.
//	-Cofla quiere saber cuanto es el vuelto

//Solo se puede hacer con variables y condicional IF
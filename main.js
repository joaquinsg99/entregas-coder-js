
/* function calculoEntrada(cantante, cantidadDeEntradas) {

    if (cantante === "duki" ||cantante === "tiago pzk") {
        return  5000 * cantidadDeEntradas; 
    } else if (cantante === "feid" ||cantante === "rels b") {
        return  10000 * cantidadDeEntradas;
    } else {
    return "cantante no encontrado"
    }
     };

   let nombre = prompt ("ingrese su nombre");
     
    /* for (let i = 1; i < 5; i++){
        alert(`hola ${nombre} , usted esta a ${5 - i} clicks de ser atendido`)

    } */


    /*  let cantanteIngresado = prompt("A que cantante queres ver (duki, tiago pzk, feid, rels b)");
     let cantidadDeEntradasIngresado = parseInt(prompt("ingrese la cantidad de entradas que desea comprar"));
   

     let resultado = `solicitaste ${cantidadDeEntradasIngresado} entrada/s para ver a ${cantanteIngresado}. El monto total es de $ ${calculoEntrada(cantanteIngresado, cantidadDeEntradasIngresado)}`;

        alert(resultado);
 */ 
        


const shows = [
    {nombre: "duki", precio: 5000},  
{nombre: "tiagopzk", precio: 5000},
{nombre: "feid", precio: 10000},
{nombre: "relsb", precio: 10000},
]; 


let nombreUsuario = prompt("ingrese su nombre");
let dniUsuario =  parseInt (prompt ("ingrese su dni"));
let cantante = prompt ("ingrese el cantante que desea ver (duki, tiagopzk, feid, relsb)");
let entradas = parseInt(prompt("ingrese la cantidad de entradas que quiere solicitar"));

 function calculoEntrada(rapero, cantidadDeEntradas) {

    if (rapero === "duki" ||rapero === "tiagopzk") {
        return  5000 * cantidadDeEntradas; 
    } else if (rapero === "feid" ||rapero === "relsb") {
        return  10000 * cantidadDeEntradas;
    } else {
    return "cantante no encontrado"
    }
     }; 
let filtrados = shows.filter(item => item.nombre.includes(cantante))

filtrados.forEach(item => { 
    let mensaje = ` Hola ${nombreUsuario}, dni: ${dniUsuario}, solicitaste ${entradas} entrada/s para ver ${item.nombre} con un costo de $ ${calculoEntrada(cantante, entradas)}. MUCHAS GRACIAS POR SU COMPRA!!`;
    alert(mensaje);
}); 
 







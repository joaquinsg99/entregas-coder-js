
function calculoEntrada(cantante, cantidadDeEntradas) {

    if (cantante === "duki" ||cantante === "tiago pzk") {
        return  5000 * cantidadDeEntradas; 
    } else if (cantante === "feid" ||cantante === "rels b") {
        return  10000 * cantidadDeEntradas;
    } else {
    return "cantante no encontrado"
    }
     };
    let nombre = prompt ("ingrese su nombre");
     
    for (let i = 1; i < 5; i++){
        alert(`hola ${nombre} , usted esta a ${5 - i} clicks de ser atendido`)

    }


     let cantanteIngresado = prompt("A que cantante queres ver (duki, tiago pzk, feid, rels b)");
     let cantidadDeEntradasIngresado = parseInt(prompt("ingrese la cantidad de entradas que desea comprar"));
   

     let resultado = `solicitaste ${cantidadDeEntradasIngresado} entrada/s para ver a ${cantanteIngresado}. El monto total es de $ ${calculoEntrada(cantanteIngresado, cantidadDeEntradasIngresado)}`;

        alert(resultado);





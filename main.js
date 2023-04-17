//Le pedimos al usuario que ingrese marca y modelo del auto 
//En caso que el auto sea Ford fiesta el descuento que se aplica será del 5%, si es un Ford Focus el descuento será del 10%. 
//Mostramos por consola el descuento que obtendrá.

let marca = prompt("Ingrese la marca del auto");
let modelo = prompt("Ingrese el modelo del auto");

function evaluar(){
    if (marca.toLowerCase().includes("ford")){
        if (modelo.toLowerCase() === "fiesta"){
            console.log("Tu descuento es del 5%");
        }
        else if (modelo.toLowerCase() === "focus"){
            console.log("Tu descuento es del 10%");
        }
        else{
            console.log("Ese modelo no tiene descuento");
        }

    }
    else{
        console.log("Esa marca no tiene descuento");
    }
}

evaluar();
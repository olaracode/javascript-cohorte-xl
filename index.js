console.log("Hello world");
// console.log() para imprimir en la consola del navegador
// Precios de productos
let cafe = 18;
let arroz = 16;

let totalCompra = cafe + arroz;
let otroProducto = "18";
// Operadores matematicos
let division = 1 / 2; // La division
let restante = 5 % 2; // El resto de una division
let multiplicar = 2 * 3; // devuelve el Producto

let name = "octavio";
let lastname = "lara";

let edadParaEntrar = 18;
let edadPedroPerez = 16;

// Operadores logicos
// console.log(edadPedroPerez == edadParaEntrar); // == compara valores

// // Dos iguales compara nada mas el valor.
// console.log(5 == "5");
// // No igual(!=)
// console.log(5 != 5);

// // Triple igual compara valor y tipo
// console.log(5 === "5");
// let palabra = "Hola";
// let segundaPalabra = "Como estas";
// console.log(palabra === segundaPalabra);

// console.log(6 > 5);
// console.log(5 >= 5);
// console.log(3 < 4);
// console.log(4 <= 4);
// console.log(edadPedroPerez >= edadParaEntrar);

// || es para cuando uno solo se tenga que cumplir
// console.log(2 == 2 || 3 == 4);

// && es para cuando los dos se tengan que cumplir
// console.log(2 == 2 && 3 == 4);

function saluda() {
  console.log("hola");
}
saluda();

/* 
  function nombreDeFuncion(Parametros){
    bloque
  }
*/

// Declarando
function suma(numero1 = 0, numero2 = 0, numero3 = 0) {
  console.log(numero1 + numero2 + numero3);
}

// NaN = Not A Number
// suma(1, 2);
// suma(3, 6);
// suma(10, 12, 15);
// suma();

function saludaConNombreYDespide(nombre) {
  if (nombre === undefined) {
    // Esto se ejecuta si la condicion es verdad
    console.log("Hola desconocido");
  } else {
    // Esto se va a ejecutar si la condicion no es verdad
    console.log("Hola " + nombre);
  }

  // Dentro de la funcion, afuera de la condicion(if)
  console.log("chao");
}

// saludaConNombreYDespide("Octavio");
// saludaConNombreYDespide();

// Ver la edad de la persona y decir si puede entrar o no
function puedeEntrarAlClub(age) {
  let legalAge = 18; // Edad minima para entrar
  let maxAge = 80; // Edad maxima para entrar
  if (age >= legalAge && age < maxAge) {
    console.log("puedes entrar");
  } else if (age <= 15) {
    console.log("Vamos a llamar a tu mama");
  } else if (age > maxAge) {
    console.log("Vaya pal jeriatrico");
  } else {
    console.log("No puedes entrar");
  }
}

puedeEntrarAlClub(25);
puedeEntrarAlClub(16);
puedeEntrarAlClub(10);
puedeEntrarAlClub(84);

// Math.random(); // Numero aleatorio entre 0.x 1
// Math.floor(); // Redondea para abajo 4.6 - 4
// Math.ceil(); // Redondea para arriba 4.1 - 5
// Math.round(); // Redondea 4.4 -4 || 4.6 - 5

// ultima(penultima(antepenultima(primera())))
// console.log(Math.round(Math.random() * 10));
// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.001));
// console.log(Math.round(4.5));

// Funcion que va a generar IDS de usuario
// o-randomNumber
// username.length te da
// ["Hola", "Como", "estas"] -> Hola = elemento 0

// La mayoria de las funciones tienen que retornar un valor
function createUserId(username) {
  if (username === undefined) {
    return "Necesitas pasar un parametro"; // Cierra la funcion
  }
  const randomNumber = Math.round(Math.random() * 10);
  return username[0] + randomNumber; // Punto de cierre
}

let random = createUserId();

function salute() {
  return "hola";
}

function isEven(num) {
  // Resto 5/2 = 1
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let number1 = isEven(3); // false
let number2 = isEven(4); // true
let number3 = isEven(16); // true

function printIsEven(even) {
  if (even) {
    console.log("Es un numero par");
  } else {
    console.log("Es un numero impar");
  }
}

// printIsEven(number1);
// printIsEven(number2);
// printIsEven(number3);

// Loops - Ciclos - iteradores
// For

// let i dice que i vale 0 la primera vuelta
for (let i = 0; i < 5; i++) {
  // if (isEven(i)) {
  //   console.log("Hola es un numero par " + i);
  // }
  // if (i === 1) {
  //   console.log("Hola soy uno");
  // } else if (i === 2) {
  //   console.log("Hola soy un 2");
  // } else if (i === 3) {
  //   console.log("hola soy un 3");
  // } else if (isEven(i)) {
  //   console.log("Hola es un numero par " + i);
  // }
  // Final del loop
  // i = i + 1;
}

const listaDeCosas = ["Octavio", "Jose", "Juan", 1, 2];
// console.log(listaDeCosas[0], listaDeCosas[1]);

// valor inicial (let i = 0), condicion, i = i +
// for (let i = 0; i < 5; i++) {
//   // console.log(i);
//   // // console.log(listaDeCosas[0])
//   // console.log(listaDeCosas[i]);
// }

// // Uno necesita saber cuando termina
// for (let i = 0; i < 10; i++) {
//   // console.log("haras 100 loops", i);
// }

let palabra = "abcdefghijk";
console.log(palabra[0]);

let esMenorDeEdad = false;

// While se usa cuando no estas seguro de la cantidad de veces que se tiene que repetir

while (esMenorDeEdad === false) {
  let age = prompt("El portero: Cuantos años tienes");
  if (parseInt(age) < 18) {
    esMenorDeEdad = true;
  }
  console.log("edad", age);
}

console.log("Hola eres menor de edad");

// for (let letra = 0; letra < palabra.length; letra = letra + 1) {
//   console.log(palabra[letra]);
// }

//variable let
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let

let x = 1;

if (x === 1) {
    let x = 2;
    console.log(x);
}

console.log(x); //no puede acceder al ambito de bloque

let name1 = "valor1", name2 = "valor2"; //acepta declarar 2 variables con 2 valores
let name3, name4 = "valor3"; //acepta declarar 2 variables con 1 valor
//let name5 = "valor4", "valor5"; no permide declarar 1 variable con 2 valores
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

function varTest() {
    var x = 1;
    {
      var x = 2; //este es un bloque
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  varTest()

  function letTest() {
    let x = 1;
    {
      let x = 2; // este es un bloque
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  letTest()

//.......propiedad en el objeto global esto a nivel superior de un programa o funciones
var y1 = 'global';
let y = 'global';
console.log(this.y1); // "global"
console.log(this.y); // undefined

//.......zona muerta declarar dos veces dentro de un mismo ambito con el mismo nombre daria un error
if (x) {
    let foo;
    let foo; // Terminamos con un SyntaxError.
  }
  if (x) {
    let foo;
    var foo; // Terminamos con un SyntaxError.
  }
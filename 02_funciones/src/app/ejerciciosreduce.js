const numeros = [5, 10, 15, 20];
const suma = numeros.reduce((acc,n) => acc + n, 0);
console.log (suma);


const numeros2= [2, 3, 4]
const producto_total =numeros2.reduce((acc, n) => acc*n, 1);
console.log (producto_total);


const palabras = ["hola", "mundo", "js"]
const longitud_palabras = palabras.reduce((acc, palabra) => acc + palabra.length, 0);
console.log (longitud_palabras);

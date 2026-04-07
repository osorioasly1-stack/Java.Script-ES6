/** 16. 
 */
let contador = 1; 
const tabla = 5;
let i = tabla * contador;
while (contador <= 10) {
  //repetir mientras el contador sea menor a 10
  i = tabla * contador; // la variable "i" es el resultado de la operación (5 * 1 = 5)
  console.log("5 *", contador, "=", i); //Aquí imprimo la estructura de la tabla
  contador++; //Esto aumenta el contador de 1 en 1, sin esto el ciclo no avanza
}




/** 17. 
 */

let contador = 10; // Poisición inicial
while (contador >= 1) {
  //mientras el contador sea mayor o igual a 1 se realiza el ciclo
  console.log(contador);
  contador--; // restar 1 en cada vuelta, para llegar al 1
}
console.log("Despegue!");

/** 18. 
 */

numero = 1;
suma = 0;
cantidad = 0;
while (suma <= 100) {
  // La suma debe seguir mientras el resultado sea menor o igual a 100
  suma = suma + numero; //se suma el número de la primer posición con el siguiente
  console.log(suma); // se muestra la suma entre los números
  cantidad++; // acá va aumentando la cantidad, para saber cuántos números usé
  numero++; //acá va aumentando el número
}
console.log("Suma final:", suma);
console.log("Cantidad de números usada:", cantidad);

/** 19. 
 */

const cifras = [3, 8, 15, 20, 7, 12, 1, 30];
const n_mayores = cifras.filter((cifra) => cifra > 10);
console.log(n_mayores);
// Usé el método filter para poder mostrar los números mayores a 10, con ayuda a la condición > 10

const n_multiplicar = n_mayores.map((n_mayor) => n_mayor * 2);
console.log(n_multiplicar);

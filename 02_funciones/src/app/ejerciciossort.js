// 10
const numeros = [40, 23, 68, 6, 23, 7];
const ascendentes = numeros.sort((a, b) => a - b); // función de comparación ((a, b) => a - b)
console.log(ascendentes);

// 11. 
const descendentes = numeros.sort((a, b) => b - a);
console.log(descendentes);


// 12. 

const nombres = ["Camilo", "Andres", "Cristina", "David", "Sofia"];
const alfa = nombres.sort();
console.log(alfa);

// 13. 
const productos = [
  { nombre: "Celular", precio: 200000 },
  { nombre: "Esfero", precio: 56000 },
  { nombre: "Computador", precio: 890000 },
  { nombre: "Mesa", precio: 70000 },
];
const valor = productos.sort((a, b) => a.precio - b.precio);
console.log(valor);

// Ejemplos_Map
// 1. Elevar al cuadrado cada numero de una lista
const numeros = [2, 10, 6, 4, 5]
const Cuadrados = numeros.map(n=> n*n );
console.log (Cuadrados);


// 2. Convertir una lista de nombres a mayusculas
const Nombres = ["camilo", "esteban", "sofia", "asly"];
const Mayusculas = Nombres.map (Nombre=> Nombre.toUpperCase());
console.log (Mayusculas);

//3.Convertir numeros a decimales
const Numeros = [3, 8, 9, 10,];
const decimales = Numeros.map (n=> n+0.5);
console.log (decimales);

//4.Elevar numeros al cubo
const numero =[2, 6, 8, 69];
const Numeros_Cubo = numero.map (n=> n**3);
console.log (Numeros_Cubo);

//5.Agregar Hola a cada nombre
const Nombree = [" Dilan", " Kevin", " Asly"];
const Saludo = Nombree.map (Nombree => "Hola" + Nombree  );
console.log (Saludo);


//Ejercicios con filter
//1. Filtrar numeros mayores a 10
const Numeroos = [6,20, 15, 11];
const Mayores= Numeroos.filter (n=> n>10);
console.log (Mayores);
  
//2.Filtar numeros pares
const numeross = [2, 3, 4, 5, 6, 7, 8]
const Pares = numeross.filter(n => n% 2 === 0);
console.log (Pares);

//3.Filtrar edades mayores de 18
const Edades = [15, 17, 20, 30, 12];
const Mayores_18 = Edades.filter (n=> n>18);
console.log (Mayores_18);

// 4. Filtrar nombres que empiecen por A
const nombres = ["Asly", "Sara", "Celeste", "Ana", "Andres"];
const inicial_A = nombres.filter(nombre => nombre.startsWith("A"));
console.log(inicial_A);

//5 Filtrar palabras largas
const Palabras =["Holaaa", "Mundo", "Bicicleta"];
const palabras_largas = Palabras.filter (palabra => palabra.length>5);
console.log (palabras_largas);

//Ejercicios con Reduce
//1.sumar numeros
const Numero =[1, 2, 3, 5, 6];
const Sumar = Numero.reduce((acc,n) => acc+n, 0);
console.log (Sumar)

//2.Contar elementos
const Frutas= ["manzana", "pera", "zanahoria"]
const Cantidad= Frutas.reduce((acc) => acc + 1,0);
console.log (Cantidad);

// 3.Numero mayor
const Numer =[5, 7, 8, 9]
const Mayor = Numer.reduce((acc, num) => {
  return num > acc ? num : acc;
});
console.log (Mayor);

//4.sumar edades
const personas = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Pedro", edad: 30 }
];
const totalEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
console.log(totalEdades);

//5.concatenar palabras
const palabras = ["Hola", "mundo", "desde", "JavaScript"];
const frase = palabras.reduce((acc, palabra) => acc + " " + palabra);
console.log(frase);
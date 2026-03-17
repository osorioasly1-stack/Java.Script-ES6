const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares= numeros.filter(n => n % 2 === 0);
console.log (pares);

const palabras = ["casa", "ventana", "sol", "computadora", "luz"];
const palabras_largas = palabras.filter(palabra => palabra.length > 5);
console.log (palabras_largas);

const estudiantes = [
    {nombre: "Ana", Nota: 4.5},
    {nombre: "Luis", Nota: 2.8},
    {nombre: "Marta", Nota: 3.7},
    {nombre: "Carlos", Nota: 2.5}
]
const estudiantes_aprobados = estudiantes.filter(estudiante => estudiante.Nota >= 3.0);
console.log (estudiantes_aprobados);
/** 20. 
 */

const ventas = [
  { producto: "computador", cantidad: 8, precio: 70000 },
  { producto: "celular", cantidad: 6, precio: 160000 },
  { producto: "audifonos", cantidad: 3, precio: 900000 },
  { producto: "teclado", cantidad: 2, precio: 70000 },
];

/// 1 ///
console.log("LOS PRODUCTOS CON CANTIDADES MAYORES O IGUALES A 2 SON:");
const cantidades = ventas.filter((venta) => venta.cantidad >= 2);
console.log(cantidades);


/// 2 ///
console.log("EL ORDEN DE LOS PRECIOS DE MAYOR A MENOR ES:");
const orden_v = ventas.sort((a, b) => b.precio - a.precio);
console.log(orden_v);


/// 3 ///
console.log("EL NUEVO ARRAY ES:");
const frases = ventas.map((venta) => {
  return `${venta.producto}-Total:${venta.cantidad * venta.precio}`;
});
console.log(frases);


/// 4 ///
console.log("EL VALOR TOTAL DE LAS VENTAS ES:");
const total_ventas = ventas.reduce((acc, venta) => acc + venta.precio, 0);
console.log(total_ventas);

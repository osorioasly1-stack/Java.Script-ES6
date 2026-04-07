/** 14. 
 */
const numero = prompt("Ingresa un número del 1 al 7");
switch (numero) {
  case 1:
    console.log("1 -> Lunes");
    break;
  case 2:
    console.log("2 -> Martes");
    break;
  case 3:
    console.log("3 -> Miércoles");
    break;
  case 4:
    console.log("4 -> Jueves");
    break;
  case 5:
    console.log("5 -> Viernes");
    break;
  case 6:
    console.log("6 -> Sábado");
    break;
  case 7:
    console.log("7 -> Domingo");
    break;
  default:
    console.log("Día no válido");
}

/** 15.
 */
const color = prompt("Ingresa un color: n\ Rojo, n\ Verde, n\ Amarillo");
switch (color) {
  case "Rojo":
    console.log("Rojo -> Color de alerta");
    break;
  case "Verde":
    console.log("Verde -> Color de avance");
    break;
  case "Amarillo":
    console.log("Amarillo -> Color de precaución");
    break;
  default:
    console.log("Color no reconocido");
}
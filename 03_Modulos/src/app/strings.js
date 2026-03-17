//funcion de permita validar si un string esta vacio, si esta vacio bota un error
//trin

//funcion titlecase que permite convertir un string a titulo

//funcion slugify que permite convertir un string a slug



export function titlecase(text) {
return text.toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "); // retorna el string convertido a titulo
}

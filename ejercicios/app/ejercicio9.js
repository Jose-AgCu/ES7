//9. Contar total de letras con reduce
//ObjeƟvo: usar reduce con strings.
//const palabras = ["hola", "mundo", "js"];
//Calcula cuántas letras hay en total sumando la longitud de cada palabra.
const palabras = ["hola", "mundo", "js"];
const palabras_Letras = palabras.reduce((total, palabra) =>  total + palabra.length, 0);
console.log(palabras_Letras);
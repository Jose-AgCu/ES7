//5.Filtrar palabras largas con filter
//ObjeƟvo: filtrar textos según su tamaño.
//const palabras = ["casa", "ventana", "sol", "computadora", "luz"];
//Obtén solo las palabras que tengan más de 5 letras
const palabras = ["casa","ventana","sol","computadora","luz"]
const palabras_largas = palabras.filter ((largo) => largo.length > 6);
console.log(palabras_largas); 
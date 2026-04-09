//4.filtrar números pares con filter
//ObjeƟvo: seleccionar elementos según condición.
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Crea un nuevo arreglo solo con los números pares.
//Salida esperada:
//[2, 4, 6, 8, 10]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n_pares = numeros.filter((par) => par % 2 === 0);
console.log(n_pares); 

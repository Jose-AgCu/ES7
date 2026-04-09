//7. Sumar números con reduce
//ObjeƟvo: acumular valores.
//const numeros = [5, 10, 15, 20];
//Usa reduce para obtener la suma total del arreglo.
//Resultado esperado:
//50

const numeros = [5, 10, 15, 20]; 
const total_numeros = numeros.reduce((total, numero) => total + numero, 0);
console.log(total_numeros);
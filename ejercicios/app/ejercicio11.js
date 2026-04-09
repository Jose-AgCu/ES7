//11. Ordenar números descendentemente con sort
//ObjeƟvo: cambiar criterio de orden.
//Usa el mismo arreglo anterior y ordénalo de mayor a menor.

const numeros = [45, 12, 78, 3, 19, 1];
const numeros_organizados = numeros.sort((a, b) => b - a);
console.log(numeros_organizados);
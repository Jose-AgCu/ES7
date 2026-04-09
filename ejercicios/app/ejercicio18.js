//18. Sumar números hasta llegar a 100 con while
//ObjeƟvo: repeƟr hasta cumplir condición.
//Crea un programa que vaya sumando números consecuƟvos comenzando en 1 hasta que la suma
//sea mayor o igual a 100.
//Debes mostrar:
// cada número sumado
// la suma final
// cuántos números fueron necesarios

let suma = 0;
let numero = 1;
let conteo = 0;

while (suma < 100) {
console.log("Número sumado:", numero);
suma += numero;
conteo++;
numero++;
}

console.log("Suma final:", suma);
console.log("Cantidad de números sumados:", conteo);
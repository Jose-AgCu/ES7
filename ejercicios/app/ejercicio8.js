//8. MulƟplicar todos los números con reduce
//ObjeƟvo: pracƟcar acumuladores.
//const numeros = [2, 3, 4];
//Usa reduce para obtener el producto total.
//Resultado esperado:
//24

const numeros =[2,3,4];
const total_numeros = numeros.reduce((total,numero) => total * numero);
console.log(total_numeros);
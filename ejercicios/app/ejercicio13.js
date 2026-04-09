//13. Ordenar productos por precio con sort
//ObjeƟvo: ordenar objetos.
//const productos = [
 //{ nombre: "Teclado", precio: 120000 },
 //{ nombre: "Mouse", precio: 50000 },
 //{ nombre: "Monitor", precio: 800000 },
 //{ nombre: "USB", precio: 30000 }
//];
//Ordénalos del más barato al más caro.
const productos = [
{ nombre: "Teclado", precio: 120000 },
{ nombre: "Mouse", precio: 50000 },
{ nombre: "Monitor", precio: 800000 },
{ nombre: "USB", precio: 30000 }
];
const productos_organizados = productos.sort((a, b) => a.precio - b.precio);
console.log(productos_organizados)

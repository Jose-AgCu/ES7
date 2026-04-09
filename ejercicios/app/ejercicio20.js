//20. Ejercicio integrador: filter + sort + map + reduce
//ObjeƟvo: integrar varios métodos en un solo problema.
//const ventas = [
 //{ producto: "Mouse", canƟdad: 3, precio: 50000 },
 //{ producto: "Teclado", canƟdad: 2, precio: 120000 },
 //{ producto: "Monitor", canƟdad: 1, precio: 800000 },
 //{ producto: "USB", canƟdad: 5, precio: 30000 }
//];
//Realiza lo siguiente:
//1. Filtra los productos cuya canƟdad sea mayor o igual a 2.
//2. Ordénalos de mayor a menor según el precio.
//3. Crea un nuevo arreglo con frases como:
//"Teclado - Total: 240000"
//4. Calcula con reduce el valor total de todas las ventas.

const ventas = [
{ producto: "Mouse", cantidad: 3, precio: 50000 },
{ producto: "Teclado", cantidad: 2, precio: 120000 },
{ producto: "Monitor", cantidad: 1, precio: 800000 },
{ producto: "USB", cantidad: 5, precio: 30000 }];
const filtrar = ventas.filter(v => v.cantidad >= 2);   
filtrar.sort((a, b) => b.precio - a.precio);   
const frases = filtrar.map(v => {
return v.producto + " - Total: " + (v.cantidad * v.precio);
});   
const ventas_total = ventas.reduce((total, ventas) => {
return total + (ventas.cantidad * ventas.precio);
}, 0);   
console.log("Total ventas:", ventas_total);
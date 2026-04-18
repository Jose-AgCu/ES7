//establecer datos
const aprendices = [
 { nombre: "Ana", nota: 4.5, programa: "ADSO" },
 { nombre: "Luis", nota: 2.8, programa: "ADSO" },
 { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
 { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
 { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }];
console.log(aprendices);//filtrar los aprendices aprobados

const aprndices_filtrados = aprendices.filter ((aprobados) => aprobados.nota >= 3.0);
console.log("Estos son los aprendices aprobados:",  aprndices_filtrados);

//filtrar los aprendices reprobados

const aprendices_reprobados = aprendices.filter ((reprobados) => reprobados.nota <3.0);
console.log("Estos son los estudiantes reprobados:", aprendices_reprobados );

//transformar los nombres a mayusculas

const nombres_mayusculas = aprendices.map((mayusculas) => mayusculas.nombre.toUpperCase());
console.log("nombres a mayusculas:", nombres_mayusculas);

//calcular el promedio

const suma = aprendices.reduce((total, estudiante ) => total + estudiante.nota,  0)
const aprendices_promedio = aprendices.length > 0 ? suma / aprendices. length : 0;
console.log("El promedio de los estudiante es: ", aprendices_promedio);

//organizar las notas de mayor a menor

const aprendices_organizados = aprendices.sort((a,b) => b.nota - a.nota)
console.log("Estudiantes organizados por la nota de mayor a menor: ", aprendices_organizados);

//clasificar notas

const aprendices_nivel = (nota) => {
const nota_entera = Math.floor(nota);
let nivel ="";
switch(nota_entera) {
case 1:
case 2: 
nivel = "Bajo";
break;
case 3:
nivel = "Basico";
break;
case 4:
nivel = "Alto";
break;
case 5:
nivel = "Superior";
break;
default:
nivel = "Fuera de rango"
}
return nivel;
}
console.log(aprendices_nivel(3,5));

aprendices.forEach(estudiante => {
const clasificacion = aprendices_nivel(estudiante.nota);
console.log("nombre:", estudiante.nombre,",", "nota:", estudiante.nota,",", "nivel:",clasificacion);
})
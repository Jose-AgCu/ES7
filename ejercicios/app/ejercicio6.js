 //Filtrar estudiantes aprobados con filter
//ObjeƟvo: aplicar condiciones sobre objetos.
//const estudiantes = [
 //{ nombre: "Ana", nota: 4.5 },
 //{ nombre: "Luis", nota: 2.8 },
 //{ nombre: "Marta", nota: 3.7 },
 //{ nombre: "Carlos", nota: 2.5 }];
 const estudiantes =[{ nombre: "Ana", nota: 4.5 },
 { nombre: "Luis", nota: 2.8 },
 { nombre: "Marta", nota: 3.7 },
 { nombre: "Carlos", nota: 2.5 }];
  const estudiantes_aprobados = estudiantes.filter((aprobados) => aprobados.nota >= 3.0);
 console.log(estudiantes_aprobados);
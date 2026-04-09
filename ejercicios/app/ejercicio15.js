//15. Clasificación de color con switch
//ObjeƟvo: usar switch con texto.
//Solicita un color y muestra un mensaje:
// "rojo" → "Color de alerta"
// "verde" → "Color de avance"
// "amarillo" → "Color de precaución"
// cualquier otro → "Color no reconocido"
let color = "amarillo";
switch (color) {
case "rojo":console.log("Color de alerta");
break;
case "verde":console.log("Color de avance");
break;
case "amarillo":console.log("Color de precaución");
break;
default:console.log("Color no reconocido");}
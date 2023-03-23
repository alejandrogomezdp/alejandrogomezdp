let dia = prompt("Introduzca el día de la semana");

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes!");
    break;
  case "martes":
    console.log("Hoy es martes!");
    break;
  case "miercoles":
    console.log("Hoy es miércoles!");
    break;
  case "jueves":
    console.log("Hoy es jueves!");
    break;
  case "martes":
    console.log("Hoy es viernes!");
    break;
  case "miercoles":
    console.log("Hoy es sábado!");
    break;
  case "jueves":
    console.log("Hoy es domingo!");
    break;

  default:
    console.log("Por favor, introduzca un dia válido!");
    break;
}

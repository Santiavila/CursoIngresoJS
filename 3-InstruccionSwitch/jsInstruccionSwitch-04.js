//Santiago Avila
function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	var mensaje;
	alert(mesDelAño);
	switch (mesDelAño) {
		case "Febrero":
			mensaje = "Este mes tiene 28 dias"
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 dias"
			break;
		default:
			mensaje = "Tiene 31 dias"
			break;

	}
alert(mensaje);



}//FIN DE LA FUNCIÓN
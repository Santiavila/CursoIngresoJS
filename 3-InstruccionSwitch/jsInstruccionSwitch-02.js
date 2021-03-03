//Santiago Avila
function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	var mensaje;
	//alert(mesDelAño)
	switch (mesDelAño) 
	{
		//Antes invierno
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
			break;
		//Durante el invierno
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!."
			break;
	}
	alert(mensaje);
}




//FIN DE LA FUNCIÓN
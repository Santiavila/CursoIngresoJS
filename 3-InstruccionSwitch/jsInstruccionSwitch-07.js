//Santiago Avila
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="Se encuentra al Este";
			break;
		case "Cataratas":
			mensaje="Se encuentra al Norte";
			break;
		case "Mar del plata":
			mensaje="Se encuentra al Oeste";
			break;
		case "Ushuaia":
			mensaje="Se encuentra al Sur"
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN
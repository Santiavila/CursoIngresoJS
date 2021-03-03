//Santiago Avila
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Mar del plata":
		case "Cataratas":
			mensaje="En este destino hace calor";
			break;
		default:
			mensaje="En este destino hace frio";
			break;
			}
		alert(mensaje);
	}
//FIN DE LA FUNCIÓN
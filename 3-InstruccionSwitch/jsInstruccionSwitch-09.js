//Santiago Avila
function mostrar()
{
	let estacion;
	let destino;
	let estadia;
	let porcentaje;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	estadia = 15000;
	porcentaje=0;
	estadia = parseInt(estadia);
	porcentaje = parseInt(porcentaje);
	

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
					break;

				case "Mar del plata":
					porcentaje = -20;
					break;

				default:
					porcentaje = -10;
					break;
			}
				break;
		case "Verano":
		
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
					break;

				case "Mar del plata":
					porcentaje = 20;
					break;

				default:
					porcentaje = 10;
					break;
			}
				break;
		case "Primavera":
		case "Otoño":
			switch(destino)
			{
				case "Cordoba":
					break;

				default:
					porcentaje = 10;
					break;
			}
	}
	
	mensaje = estadia + ((estadia*porcentaje)/100);

	alert(mensaje);


}//FIN DE LA FUNCION
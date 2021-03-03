/* Santiago Avila
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("La clave ingresada es invalida");
		console.log("clave valida")
	}
	alert("clave valida")
}//FIN DE LA FUNCIÓN

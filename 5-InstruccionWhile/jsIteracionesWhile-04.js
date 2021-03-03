/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);
	//while(numeroIngresado>-1 && numeroIngresado<10)
	//while(numeroIngresado>-1 or numeroIngresado<10)

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=parseInt(numeroIngresado);
		numeroIngresado = prompt("error: ingrese un número entre 0 y 9.");
	}
	
}//FIN DE LA FUNCIÓN
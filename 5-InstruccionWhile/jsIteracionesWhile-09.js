/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*function mostrar()
{	
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	banderaDelPrimero = "Es el primero";
	respuesta = "si";
	
	while(respuesta =="si")
	{
		numeroIngresado = prompt("Ingrese numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "Es el primero")
		{
			numeroMinimo = numeroIngresado
			numeroMaximo = numeroIngresado
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}

			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
		}
		
		banderaDelPrimero = "No es el primero."

		respuesta = prompt("Desea continuar?")
	}	

	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo

}//FIN DE LA FUNCIÓN */

function mostrar()
{	
	
	// Defino variables
	var contador;
	var nroIngresado;
	var numeroParMax;
	var numeroImparMin;
	var respuesta;

	// Asigno valores iniciales
	contador=0;
	respuesta='si';

	// Iterador
	while(respuesta=="si")
	{

		contador++;
	
		// Pido, parseo y acumulo el nroIngresado
		nroIngresado = prompt("Ingrese un numero");
		nroIngresado = parseInt(nroIngresado);

		// Inicializo los numeros maximos y minimos
		if(contador%2 == 0)
		{
			numeroParMax = nroIngresado;
			numeroMinimo = nroIngresado;
		}
		else
		{
			// Luego de el primer ingreso
			// Analizo los valores maximos y minimos
			if (nroIngresado > numeroMaximo)
			{
				numeroMaximo = nroIngresado;
			};
			if (nroIngresado < numeroMinimo)
			{
				numeroMinimo = nroIngresado;
			};
		};

		// Condicion para continuar
		respuesta=prompt("Desea continuar? si para continuar, no para salir.");

	}

	// Muestreo de datos
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}

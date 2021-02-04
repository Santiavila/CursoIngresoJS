/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var mensajeDeRespuesta;
	nombreIngresado = prompt("Ingrese su nombre");

	mensajeDeRespuesta= "Su nombre es: " +nombreIngresado;
	document.getElementById('txtIdNombre').value = mensajeDeRespuesta; //Mostrar
}

/*
salida
	alert()
	document.getElementById('txtIdNombre').value = mensajeDeRespuesta; 
Ingreso
	=prompt()
	nombreIngresado = document.getElementById('txtIdNombre').value; //toma el valor
*/
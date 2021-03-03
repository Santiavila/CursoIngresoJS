/* Santiago Avila

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar() {
	var edad;
	var estadoIngresado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoIngresado = document.getElementById("estadoCivil").value;


	if (edad < 18 && estadoIngresado != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero.")
	}



}//FIN DE LA FUNCIÓN
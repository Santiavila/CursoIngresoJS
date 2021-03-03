function mostrar()
{
		var edad;
	
		edad = document.getElementById("txtIdEdad").value;
		edad = parseInt(edad)
	
		if (edad > 17) {
			alert("Es mayor de edad")
		} else {
			alert("No es mayor")
		}
	
	}//FIN DE LA FUNCIÓN

 //Ejercicio tres con dos if

 function mostrar() {
	var edadMayor;
	var edadMenor;

	edadMayor = document.getElementById("txtIdEdad").value;
	edadMenor = document.getElementById("txtIdEdad").value;
	edadMayor = parseInt(edadMayor);
	edadMenor = parseInt(edadMenor);

	if (edadMayor > 17) {
		alert("Es mayor de edad")
	}; 
	if (edadMenor < 18) {
		alert("Es menor de edad")
	}; 
}//FIN DE LA FUNCIÓN
function mostrar() {
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	/*
	if(edad < 18 && edad > 12){
		alert("Usted es un adolescente")
	}*/

	/*if (edad > 17) {
		alert("No es adolescente")
	}
	if (edad > 13) {
		alert("No es adolescente")
	}*/


	if (edad < 17 || edad > 12) {
		alert("No es un adolescente")

	}
}
//FIN DE LA FUNCIÓN
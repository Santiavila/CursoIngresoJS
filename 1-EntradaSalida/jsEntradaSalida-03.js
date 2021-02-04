/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value ; //asi agarro un ID
	nombreIngresado = document.getElementById('txtIdNombre').value; //toma el valor
	alert(nombreIngresado);

}



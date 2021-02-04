/*Santiago Avila
Ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar() {
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = document.getElementById('txtIdNombre').value;
	edadIngresada = document.getElementById('txtIdEdad').value;
	alert("usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");

}*/


/*Santiago Avila
Ejercicio 5 bis
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan
*/
function mostrar() {
	var nombreIngresado;
	var edadIngresada;
	var apellido;

	apellido = prompt("Ingrese su apellido");
	nombreIngresado = document.getElementById('txtIdNombre').value;
	edadIngresada = document.getElementById('txtIdEdad').value;
	//alert("usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
	alert(apellido + ", usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.")
}
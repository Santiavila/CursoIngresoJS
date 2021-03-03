/*
Santiago Avila
Lo mando nuevamente, me equivoque al leer la consigna.
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
si ingreso 100 110*/
function mostrarAumento() {
	var sueldo;
	var aumento;
	var resultado;


	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	aumento= sueldo*0.10;

	resultado = sueldo + aumento;
	document.getElementById("txtIdResultado").value = resultado;



}

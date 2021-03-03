/*
SANTIAGO AVILA
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	
	edadIngresada = prompt("Ingrese su edad por favor.");
	edadIngresada = parseInt(edadIngresada);

	while (isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90) 
	{
		edadIngresada = prompt("Para ingresar debe tener entre 18 a 90 años. Ingrese nuevamente.");
		edadIngresada = parseInt(edadIngresada);
	}

	
	sexoIngresado = prompt("Ingrese su sexo, 'M' para masculino, 'F' para femenino")

	while (sexoIngresado != "F" && sexoIngresado != "M" && sexoIngresado != "f" && sexoIngresado != "m") 
	{
		sexoIngresado = prompt("Dato incorrecto, vuelva a ingresarlo.")
	}
	switch (sexoIngresado) 
	{
		case "F":
		case "f":
			sexoIngresado = "Femenino";
			break;
		case "M":
		case "m":
			sexoIngresado = "Masculino";
			break;

	}

	
	estadoCivilIngresado = prompt("	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while (isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Incorrecto. Reingrese estado civil correctamente.");
	}
	switch (estadoCivilIngresado) 
	{
		case "1":
			estadoCivilIngresado = "Soltero";
			break;
		case "2":
			estadoCivilIngresado = "Casado";
			break;
		case "3":
			estadoCivilIngresado = "Divorciado";
			break;
		case "4":
			estadoCivilIngresado = "Viudo"
			break;
	}

	
	sueldoBruto = prompt("Sueldo bruto, no menor a 8000");
	sueldoBruto = parseInt(sueldoBruto);

	while (sueldoBruto < 8000 || isNaN(sueldoBruto) == true) 
	{
		sueldoBruto = prompt("Ingrese un valor correcto.");
		sueldoBruto = parseInt(sueldoBruto);
	}

	
	numeroLegajo = prompt("Ingrese su número de legajo:");
	numeroLegajo = parseInt(numeroLegajo);
	while (isNaN(numeroLegajo) == true || numeroLegajo < 1000 || numeroLegajo > 9999) 
	{
		numeroLegajo = prompt("Número de legajo ingresado no válido. Ingrese nuevamente su número de legajo (4 cifras sin ceros a la izquierda):");
		numeroLegajo = parseInt(numeroLegajo);
	}

	
	nacionalidad = prompt("Ingrese su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados):")
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" && nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
	{
		nacionalidad = prompt("Nacionalidad ingresada no válida. Ingrese nuevamente su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados)")
	}
	switch (nacionalidad) 
	{
		case "A":
		case "a":
			nacionalidad = "Argentino";
			break;
		case "E":
		case "e":
			nacionalidad = "Extranjero";
			break;
		case "N":
		case "n":
			nacionalidad = "Nacionalizado";
			break;
	}



	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;

}

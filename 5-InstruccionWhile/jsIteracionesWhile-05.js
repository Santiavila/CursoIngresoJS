/* Santiago Avila
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
	
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado = prompt("Ponga un sexo valido");
		console.log(sexoIngresado);
	}
	switch(sexoIngresado)
	{
		case "f":
			sexoIngresado="femenino";
			break;
		case "m":
			sexoIngresado="masculino";
			break;

	}

	//txtIdSexo.value=sexoIngresado;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN
//Santiago Avila
function mostrar()
{

	var notaRandom;
	var mensaje;
	notaRandom = Math.floor(Math.random() * 10) + 1;
	


	if(notaRandom<4)
	{
		mensaje = (" Vamos, la proxima se puede");
	}
	else
	{
		if(notaRandom > 8)
		{
			mensaje = (" EXCELENTE");
		}
		else
		{
			mensaje = (" APROBO");
		}
		alert(notaRandom + mensaje)
	}

}//FIN DE LA FUNCIÓN
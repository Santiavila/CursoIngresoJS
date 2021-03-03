function mostrar()
{
	var mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño) //el switch nos sirve para hacer comparaciones NO logicas. Siempre se puede cambiar por if. No viceversa

	{
		case "Enero":
			alert("que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
			case "Julio":
				alert("se vienen las vacaciones!!!");
				break;
			case "Diciembre":
				alert("felices fiestas!!!");
				break;
			default:
				break;
	}




	/*if(mesDelAño=="Enero")
	{
		alert("que comiences bien el año!!!");
	}
	else
	{
		if(mesDelAño=="Marzo")
		{
			alert("a clases!!!")
		}
		else
		{
			if(mesDelAño=="Julio")
			{
				alert("se vienen las vacaciones!!!")
			}else
			{
				if(mesDelAño=="Diciembre")
				{
					alert("felices fiestas!!!")
				}
			}
		}
	}*/



}//FIN DE LA FUNCIÓN

/*//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);*/
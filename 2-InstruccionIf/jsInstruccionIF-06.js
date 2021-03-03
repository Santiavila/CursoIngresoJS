function mostrar()
{
	
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	console.log("la edad ingresada es :"+ edad);
/*
minimo 4 
maximo 4
	if(edad<13)
	{
		alert("niño");
	}
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}
	if(edad>17)
	{
		alert("es mayor");
	}
*/
	//error
/*
	if(edad<13)
	{
		alert("niño");
	}
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}
	else
	{
		alert("es mayor");
	}

*/
/*
	if(edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad<18 && edad>12)
		{
			alert("adolescente");
		}
		else
		{
			if(edad>17)
			{
				alert("es mayor");
			}
		}

	}

*/
// minimo 1 
//maximo 2 
	if(edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad>18)
		{
			alert("es mayor");
		}
		else
		{
			alert("adolescente");
		}
	}


	
	

}//FIN DE LA FUNCIÓN

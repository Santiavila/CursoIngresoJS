//TERCER EJERCICIO PARCIAL 2020
//SANTIAGO AVILA

/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/


function mostrar()
{

	//Definición de variables
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var continuar;
	var contador;
	var temperaturaMasAlta;
	var nombreMayorTemp;
	var cantHomSolyViu;
	var cantTercerEdadMasTemp;
	var cantMayoresdeEdadViu;
	var cantHombresSolteros;
	var sumaEdadHombresSolteros;
	var promedioEdadSolteros;

	//Asigno valores
	continuar = true;
	contador = 0;
	cantHomSolyViu=0;
	cantTercerEdadMasTemp=0;
	cantMayoresdeEdadViu=0;
	cantHombresSolteros=0;
	sumaEdadHombresSolteros=0;

	
	
	//Logica del programa
	while (continuar)
	{
			//Actualizo contador
			contador++;


		//OBTENCION Y VERIFICACION DE DATOS

		//nombre
		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("ERROR, ingrese su nombre.");
		}
		
		//edad
		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada)
		while(isNaN(edadIngresada) == true || edadIngresada < 0 || edadIngresada > 120)
		{
			edadIngresada = prompt("ERROR, ingrese su edad.");
			edadIngresada = parseInt(edadIngresada);
		}
		
		//sexo
		sexoIngresado = prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "m" && sexoIngresado != "f")
		{
			sexoIngresado = prompt("ERROR, ingrese su sexo.");
		}

		//estado civil
		estadoCivilIngresado = prompt("Ingrese su estado civil correcto");
		while(isNaN(estadoCivilIngresado) == false && (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo"))
		{
			estadoCivilIngresado = prompt("ERROR, ingrese su estado civil correcto.");
		}

		//Temperatura corporal
		temperaturaCorporalIngresada = prompt("Ingrese su temperatura corporal.");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || (temperaturaCorporalIngresada < 30 || temperaturaCorporalIngresada > 40))
		{
			temperaturaCorporalIngresada = prompt("ERROR, ingrese su temperatura corporal.");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}
		
		//Switcheo estado civil
		switch(estadoCivilIngresado)
		{
			case "soltero":
				if(sexoIngresado == "m")
				{
					cantHombresSolteros++;
					sumaEdadHombresSolteros += edadIngresada;

					cantHomSolyViu++;
				 }
			break;
			
			case "casado":
					break;

			case "viudo":
				if(sexoIngresado == "m")
				{
					cantHomSolyViu++;
				}
				if(edadIngresada > 17)
				{
					cantMayoresdeEdadViu++;
				}
				
					break;


		}

		//Busco el nombre de la persona que mas temperatura corporal posea
		if(contador == 1){
			nombreMayorTemp = nombreIngresado;
			temperaturaMasAlta = temperaturaCorporalIngresada;
		}else
		{
			if(temperaturaCorporalIngresada > temperaturaMasAlta)
			{
				nombreMayorTemp = nombreIngresado;
				temperaturaMasAlta = temperaturaCorporalIngresada;
			}
		}

		//Calculo las personas de tercer edad con mas de 38º
		if((edadIngresada > 60) && (temperaturaCorporalIngresada > 38))
				{
					cantTercerEdadMasTemp++;
				}
		//Condicion para continuar
			continuar = confirm("Desea continuar?");


    }
		

	//Calculo promedio de edad hombres solteros.

	promedioEdadSolteros = sumaEdadHombresSolteros / cantHombresSolteros;

	//Muestreo de datos
	console.log(nombreIngresado + " tiene la temperatura mas alta que es igual a: " + temperaturaMasAlta);
	console.log("Las personas mayores de edad viudas son: " + cantMayoresdeEdadViu);
	console.log("La cantidad de hombres solteros o viudos es igual a:  " + cantHomSolyViu);
	console.log("Las personas mayores de edad con mas de 38º son en total: " + cantTercerEdadMasTemp);
	console.log("El promedio de edad entre los hombres solteros es igual a: " + promedioEdadSolteros);

}


/*
SANTIAGO AVILA. PARTE C
For 10 A-ingrese nombre , sexo , edad 
(validar que si es mujer debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal
For 10 B- necesitamos saber: el nombre y el sexo de la persona mas alta , 
--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay
For 10 el promedio de edad entre los hombre ,el promedio de edad entre las mujeres,
 la cantidad de personas que miden mas de 1,60 metros,
  y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
 
function mostrar ()
{

    //Definicion de variables
    var nombre;
    var sexo;
    var edad;
    var altura;
    var contador;
    var continuar;
    var nombrePersonaMasAlta;
    var personaMasAlta;
    var sexoPersonaMasAlta;
    var nombreMujerMasJoven;
    var mujerMasJoven;
    var nombreHombreMasBajo;
    var hombreMasBajo;
    var banderaPrimerHombreBajo;
    var banderaPrimerMujerJoven;
    var banderaPrimerPersonaAlta;
    var cantMujeres;
    var sumaEdadMujeres;
    var cantHombres;
    var sumaEdadHombres;
    var cantPersonasMasUnoSesenta;
    var cantMujeresMasUnoSesenta;
    var porcentajeMujeresPersonas;


    //Asigno valores a variables
    continuar=true;
    contador=0;
    banderaPrimerHombreBajo=0;
    banderaPrimerMujerJoven=0;
    banderaPrimerPersonaAlta=0;
    sumaEdadMujeres=0;
    cantMujeres=0;
    cantHombres=0;
    sumaEdadHombres=0;
    cantPersonasMasUnoSesenta=0;
    cantMujeresMasUnoSesenta=0;

        //logica del programa
        
    while(continuar){
            
            contador++;
            
        //PARTE A
        //nombre
        nombre = prompt("Ingrese el nombre por favor.")
        while(isNaN(nombre)==false)
        {
            nombre=prompt("ERROR, Ingrese el nombre por favor");
        }

        //sexo
        sexo=prompt("Ingrese sexo: m para Masculino o f para Femenino")
        while((isNaN(sexo)==false)|| (sexo != "m" && sexo != "f"))
        {
            sexo=prompt("ERROR, ingrese el sexo correctamente por favor.")
        }

        //edad
        edad=prompt("Ingrese su edad por favor.")
        edad=parseInt(edad);
        if(sexo=="m"){
            while(sexo=="m" && edad>13)
            {
                edad=prompt("Usted debe ser un niño, la edad debe ser menor a 13");
                edad=parseInt(edad);
            }
        }else{
             while(sexo=="f" && edad < 13 || edad > 19  )
                {
                    edad=prompt("Usted es mujer, su edad debe ser entre 13 a 19");
                    edad=parseInt(edad);
                }
             }

        //Altura
        altura=prompt("Ingrese su altura por favor.")
        altura=parseInt(altura);
        while((isNaN(altura)==true))
        {
            altura=prompt("ERROR, ingrese una altura correcta.");
            altura=parseInt(altura);
        }

        
        //PARTE B

        if(banderaPrimerPersonaAlta==0)
        {
                nombrePersonaMasAlta=nombre;
                personaMasAlta=altura;
                sexoPersonaMasAlta=sexo;
                banderaPrimerPersonaAlta=1;
        }else
        {
            if(altura > personaMasAlta)
            {
                nombrePersonaMasAlta=nombre;
                personaMasAlta=altura;
                sexoPersonaMasAlta=sexo;
            }
        }

        switch(sexo)
        {
            case "f":
                if(banderaPrimerMujerJoven==0)
                {
                    nombreMujerMasJoven=nombre;
                    mujerMasJoven=edad;
                    banderaPrimerMujerJoven=1;
                }else
                {
                    if(edad < mujerMasJoven)
                    {
                        nombreMujerMasJoven=nombre;
                        mujerMasJoven=edad;
                    }
                    
                }
                cantMujeres++;
                sumaEdadMujeres += edad;
                break;
            case "m":
                if(banderaPrimerHombreBajo==0)
                {
                    nombreHombreMasBajo=nombre;
                    hombreMasBajo=altura;
                    banderaPrimerHombreBajo=1;
                }else
                {
                    if(altura < hombreMasBajo)
                    {
                        nombreHombreMasBajo=nombre;
                        hombreMasBajo=altura;
                    }
                }
                cantHombres++;
				sumaEdadHombres += edad;
                break;
        }
        //PARTE C
        //Calculo la cantidad de personas que miden mas de 1.60
        if((altura > 160))
			{
					cantPersonasMasUnoSesenta++;
				if(sexo == "f")
				{
					cantMujeresMasUnoSesenta++;
				}
            }



        continuar=confirm("Desea seguir ingresando datos?");
    }

    //Promedio edad hombres
    promedioEdadHombres = sumaEdadHombres / cantHombres;

    //Promedio edad mujeres
    promedioEdadMujeres = sumaEdadMujeres / cantMujeres;
    

    //Porcentaje de mujeres sonre el total de personas 1.60

    porcentajeMujeresPersonas = (cantMujeresMasUnoSesenta / cantPersonasMasUnoSesenta) * 100;
    

    //MUESTREO DE DATOS
    console.log("El nombre de la persona mas alta es: " + nombrePersonaMasAlta + " y su sexo es: " + sexoPersonaMasAlta);
    console.log("El nombre de la mujer mas joven es: " + nombreMujerMasJoven);
    console.log("El nombre del hombre mas bajo es: " + nombreHombreMasBajo);
    console.log("El promedio de edad entre los hombres es de: " + promedioEdadHombres);
    console.log("El promedio de edad entre las mujeres es de: " + promedioEdadMujeres);
    console.log("La cantidad de personas que miden mas de 1.60 es de: " + cantPersonasMasUnoSesenta);
    console.log("El porcentaje de mujeres sobre el total de personas de mas de 1.60 es de: " + porcentajeMujeresPersonas);
    

}

*/



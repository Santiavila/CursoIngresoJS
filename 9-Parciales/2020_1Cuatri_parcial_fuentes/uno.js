
	/*Realizar el algoritmo que permita ingresar 5 paises:
    el continente (validar entre america , asia , europa ,africa y oceania) 
    el nombre del país, 
    cantidad de habitantes en millones entre 1 y 7000 (validar)
    el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
    la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
    a)La cantidad de temperaturas pares.
    b)la cantidad de temperaturas impares de europa
    c)El nombre del pais con menos habitantes
    d)la cantidad de paises que superan los 40 grados.
    e)la cantidad de paises de america que 
    tienen menos de 0 grados .
    f)el promedio de habitantes entre los 
    paises ingresados .
    g)el promedio de habitantes entre 
    los paises que superan los 40 grados        
    H) la temperatura mínima ingresada, y 
    nombre del pais que registro esa temperatura. 
    i) que continente tiene mas habitantes.*/
    
    function mostrar (){
        
        //Inicializo variables
        var continente;
        var pais;
        var habitantes;
        var nivelPobreza;
        var temperaturaIngresada;
        var continuar;
        var contador;
        var contadorTempPares;
        var contadorImparesEuropa;
        var paisMenosHabitantes;
        var cantPaisMenosHabitantes;
        var cantPaisesMasCuarentaGrados;
        var cantTemperaturas;
        var sumaTemperaturas;
        var cantHabitantes;
        var sumaCantHabitantes;
        var banderaDelPrimeroMenosHabitantes;
        var cantPaises;
        var promedioCantHabitantes;
        var banderaDelPrimeroTemperaturaMin;
        var tempMinIngresada;
        var paisMenosTemperatura;
        var mensaje;
        var acumuladorHabitantesAmerica;
        var acumuladorHabitantesAfrica;
        var acumuladorHabitantesEuropa;
        var acumuladorHabitantesOceania;
        var acumuladorHabitantesAsia;
        var promedioCantHabitantesMayorCuarenta;
        var  cantAmericaMenosCeroGrados;
        var cantHabitantesMasCuarentaGrados;
        var sumaCantHabitantesMasCuarentaGrados;
        

        //Asigno valor variables

        continuar=0;
        contador=0;
        contadorTempPares=0;
        contadorImparesEuropa=0;
        cantTemperaturas=0;
        banderaDelPrimeroMenosHabitantes=0;
        cantPaises=0;
        cantHabitantes=0;
        cantPaisesMasCuarentaGrados=0;
        sumaTemperaturas=0;
        sumaCantHabitantes=0;
        banderaDelPrimeroTemperaturaMin=0;
        acumuladorHabitantesAmerica=0;
        acumuladorHabitantesAfrica=0;
        acumuladorHabitantesEuropa=0;
        acumuladorHabitantesOceania=0;
        acumuladorHabitantesAsia=0;
        cantAmericaMenosCeroGrados=0;
        cantHabitantesMasCuarentaGrados=0;
        sumaCantHabitantesMasCuarentaGrados=0;
        
        
        //logica
        while(continuar<2)
        {
            continuar++;

            continente=prompt("Ingrese un continente")
            while(isNaN(continente)==false || continente != "america" && continente != "europa" && continente != "asia" && continente != "africa" && continente != "oceania")
            {
                continente=prompt("error, ingrese un continente correcto");
            }

            pais=prompt("Seleccione su pais")
            while(isNaN(pais) == false)
            {
                pais=prompt("Error, ingrese su pais");
            }
            cantPaises++;
            /*
            habitantes=prompt("Ingrese la cantidad de habitantes");
            habitantes=parseInt(habitantes);
            while(isNaN(habitantes) == true || habitantes < 1000000 || habitantes > 7000000)
            {
                habitantes=prompt("Error, Ingrese la cantidad de habitantes");
                habitantes=parseInt(habitantes);
            }
            cantHabitantes++;
            sumaCantHabitantes+=habitantes;

            nivelPobreza=prompt("Ingrese el nivel de pobreza");
            while(isNaN(nivelPobreza) == false || nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "muy rico")
            {
                nivelPobreza = prompt("Error, ingrese el nivel de pobreza")
            }
            if(continente == "europa" && nivelPobreza == "pobre")
                {
                    nivelPobreza =prompt("Error, ingrese el nivel de pobreza entre rico y muy rico");
                } */

            temperaturaIngresada = prompt("Ingrese la temperatura minima");
            temperaturaIngresada=parseInt(temperaturaIngresada);
            while(isNaN(temperaturaIngresada) == true && (temperaturaIngresada < -50 || temperaturaIngresada > 50))
            {
                temperaturaIngresada = prompt("Error, Ingrese la temperatura minima");
                temperaturaIngresada=parseInt(temperaturaIngresada);
            }
            cantTemperaturas++;
            sumaTemperaturas+=temperaturaIngresada;

        //cantidad temperaturas pares e impares
            if (cantTemperaturas % 2 == 0)
            {
                contadorTempPares++;
            }
            else
            {
                if(continente == "europa")
                {
                    contadorImparesEuropa++;
                }
            }
        
            //Pais con menos habitantes
            if(banderaDelPrimeroMenosHabitantes == 0)
            {
                cantPaisMenosHabitantes = habitantes;
                paisMenosHabitantes = pais;   
                banderaDelPrimeroMenosHabitantes = 1;
            }
            else
            {
                if(habitantes < cantPaisMenosHabitantes)
                {
                    cantPaisMenosHabitantes = habitantes;
                    paisMenosHabitantes = pais; 
                }
                
             }
            //cantidad de paises mayores a 40 gradis
            if(temperaturaIngresada > 40)
            {
                cantPaisesMasCuarentaGrados++;
            }

        
           
        
        //Temperatura minima ingresada
            
            if(banderaDelPrimeroTemperaturaMin == 0)
            {
                tempMinIngresada = temperaturaIngresada;
                paisMenosTemperatura = pais;
                banderaDelPrimeroTemperaturaMin =1;
            }
            else
            {
                if(temperaturaIngresada < tempMinIngresada)
                {
                    tempMinIngresada = temperaturaIngresada;
                    paisMenosTemperatura = pais;

                }
            }
        
        
         //Continente con mas paises
        switch(continente)
        {
            case "america":
                acumuladorHabitantesAmerica+=habitantes;
                if (temperaturaIngresada < 0)
                {
                    cantAmericaMenosCeroGrados++;
                }
                break;
            case "africa":
                acumuladorHabitantesAfrica+=habitantes;
                break;
            case "europa":
                acumuladorHabitantesEuropa+=habitantes;
                    break;
            case "oceania":
                acumuladorHabitantesOceania+=habitantes;
                    break;
            case "asia":
                acumuladorHabitantesAsia+=habitantes;
                    break;
        }
        
        if( acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && 
            acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && 
            acumuladorHabitantesAmerica > acumuladorHabitantesAsia && 
            acumuladorHabitantesAmerica > acumuladorHabitantesOceania)
        {
           mensaje="America";
        }else{
            if(acumuladorHabitantesAfrica > acumuladorHabitantesEuropa &&
                 acumuladorHabitantesAfrica > acumuladorHabitantesAsia && 
                 acumuladorHabitantesAfrica > acumuladorHabitantesOceania)
            {
                mensaje="Africa";
            }
            else
            {
                if(acumuladorHabitantesEuropa > acumuladorHabitantesAsia &&
                    acumuladorHabitantesEuropa > acumuladorHabitantesOceania)
                {
                    mensaje="Europa";
                } else {
                    if(acumuladorHabitantesOceania > acumuladorHabitantesAsia)
                    {
                        mensaje="Oceania";
                    }
                    else
                    {
                        mensaje="Asia";
                    }
                }
            }
        }
        //promedio de habitantes en paises mayores a 40º AYUDA EZE
        if(temperaturaIngresada > 40)
     {
        sumaCantHabitantesMasCuarentaGrados++;
         cantHabitantesMasCuarentaGrados+=habitantes;
     }

       

    }
     //promedio cantidad habitantes entre paises ingresados

     promedioCantHabitantes = sumaCantHabitantes/cantPaises;

     //promedio cantidad habitantes entre paises mayores a 40 grados
     promedioCantHabitantesMayorCuarenta = cantHabitantesMasCuarentaGrados/sumaCantHabitantesMasCuarentaGrados;
     

     console.log("La cantidad de temperaturas pares es igual a: " + contadorTempPares);
     console.log("La cantidad de temperaturas impares de Europa es igual a  " + contadorImparesEuropa);
     console.log("El nombre del pais con menos habitantes es igual a: " + paisMenosHabitantes);
     console.log("la cantidad de paises que superan los 40 grados es igual a: " + cantPaisesMasCuarentaGrados);
     console.log("El promedio de habitantes entre los paises ingresados es igual a : " + promedioCantHabitantes);
     console.log("El promedio de habitantes entre los paises que superan los 40 grados es igual a : " + promedioCantHabitantesMayorCuarenta);
     console.log("El pais con menor temperatura es: " + paisMenosTemperatura + "con una temperatura igual a" + tempMinIngresada);
     console.log("El continente que tiene mas habitantes es" + mensaje);
 }














 //Ejercicio uno


 /*
/*
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

/*
function mostrar()
{
    var contadorProducto;
    var tipoIngresado;
    var precioIngresado;
    var cantidadIngresada;
    var marcaIngresada;
    var fabricanteIngresado;
    var banderaPrimerAlcohol;
    var alcoholMasBarato;
    var cantidadMasBarato;
    var fabricanteMasBarato;
    var acumuladorCantidadJabon;
    var acumuladorCantidadBarbijo;
    var acumuladorCantidadAlcohol;
    var contadorAlcohol;
    var contadorBarbijo;
    var contadorJabon;
    var productoMasUnidades;
    var promedio;

    acumuladorCantidadJabon = 0;
    contadorJabon = 0;
    acumuladorCantidadAlcohol = 0;
    contadorAlcohol = 0;
    acumuladorCantidadBarbijo = 0;
    contadorBarbijo = 0;
    productoMasUnidades = 0;


    banderaPrimerAlcohol = 0;


    contadorProducto = 0;

    while(contadorProducto < 5)
    {
        contadorProducto= contadorProducto+1; // o contadorProducto++;

        tipoIngresado= prompt("Tipo de producto ingresado: ")
        while(isNaN(tipoIngresado) == false || (tipoIngresado != "jabon" && tipoIngresado != "alcohol" && tipoIngresado != "barbijo"))
        {
            tipoIngresado = prompt("ERROR, el tipo ingresado debe ser alcohol, barbijo o jabon.")
        }

        precioIngresado = prompt("Ingrese el precio del producto");
        precioIngresado = parseInt(precioIngresado);
        while(isNaN(precioIngresado)==true || precioIngresado < 100 || precioIngresado > 300)
        {
            precioIngresado = prompt("ERROR, ingrese el precio del producto entre 100 a 300.");
            precioIngresado = parseInt(precioIngresado);
        }

        cantidadIngresada = prompt("Ingrese la cantidad del producto");
        cantidadIngresada = parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true || cantidadIngresada < 1 || cantidadIngresada > 1000)
        {
            cantidadIngresada = prompt("ERROR, la cantidad del producto debe ser entre 0 a 1000.");
            cantidadIngresada = parseInt(cantidadIngresada);
        }

        marcaIngresada= prompt("Indique la marca del producto ")
        while(isNaN(marcaIngresada) == false)
        {
            marcaIngresada = prompt("ERROR, ingrese una marca valida.")
        }

        fabricanteIngresado= prompt("Indique el fabricante del producto ")
        while(isNaN(fabricanteIngresado) == false)
        {
            fabricanteIngresado = prompt("ERROR, ingrese un fabricante valido.")
        }*/
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
        //primero ver si es alcohol.
    
      /*  if(tipoIngresado == "alcohol")
        {
            if(banderaPrimerAlcohol == 0)
            {
                alcoholMasBarato=precioIngresado;
                fabricanteMasbarato=fabricanteIngresado;
                cantidadMasbarato=cantidadIngresada;
                banderaPrimerAlcohol = 1;
            }
            else
            {
                if(precioIngresado < alcoholMasBarato)
                {
                    alcoholMasBarato=precioIngresado;
                    alcoholMasBarato=cantidadIngresada;
                    fabricanteMasbarato=fabricanteIngresado
                }
            }

        }*/
// b) Del tipo con mas unidades, el promedio por compra
/*
        switch(tipoIngresado)
        {
            case "jabon":
                acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadIngresada;
                contadorJabon = contadorJabon + 1;
                
                break;
            case "alcohol":
                acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadIngresada;
                contadorAlcohol = contadorAlcohol + 1;
                if(tipoIngresado == "alcohol")
                {
                    if(banderaPrimerAlcohol == 0)
                    {
                        alcoholMasBarato=precioIngresado;
                        fabricanteMasBarato=fabricanteIngresado;
                        cantidadMasBarato=cantidadIngresada;
                        banderaPrimerAlcohol = 1;
                    }
                    else
                    {
                        if(precioIngresado < alcoholMasBarato)
                        {
                            alcoholMasBarato=precioIngresado;
                            cantidadMasBarato=cantidadIngresada;
                            fabricanteMasbarato=fabricanteIngresado;
                        }
                    }
        
                }
                break;
            case "barbijo":
                acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadIngresada;
                contadorBarbijo = contadorBarbijo + 1;
                break;
        }

        
    } //fin while 5
	
	console.log("el alcohol más barato es del fabricante " + fabricanteMasBarato + " y la cantidad de unidades es " + cantidadMasBarato)
    //Saber cual tiene mas cantidad

    if(acumuladorCantidadJabon > acumuladorCantidadBarbijo && acumuladorCantidadJabon > acumuladorCantidadAlcohol)
    {
        productoMasUnidades = "jabon";
        promedio = acumuladorCantidadJabon / contadorJabon;
    }else{
        if(acumuladorCantidadAlcohol > acumuladorCantidadBarbijo)
        {
            productoMasUnidades = "alcohol";
            promedio = acumuladorCantidadAlcohol / contadorAlcohol;
        }
        else
        {
            productoMasUnidades = "barbijo";
            promedio = acumuladorCantidadBarbijo / contadorBarbijo;
        }
    }

    console.log("El promedio de " + productoMasUnidades + " es: " + promedio);


   // c) Cuántas unidades de jabones hay en total 

   console.log("Hay " + acumuladorCantidadJabon + " de jabon");
}
*/

	/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 

function mostrar()
{
    //Definicion de variables

    
    var contador;
    var tipoProducto;
    var precioProducto;
    var cantidadUnidades;
    var marcaProducto;
    var fabricanteProducto;
    var mensaje;
    var alcoholMasBarato;
    var cantAlcoholMasBarato;
    var fabricanteAlcoholMasBarato;
    var cantAlcohol;
    var cantBarbijos;
    var cantJabon;
    var contadorAlcohol;
    var contadorBarbijo;
    var contadorJabon;
    var promedioPorCompra;

    //Inicializo variables
    contador=0;
    cantAlcohol=0;
    cantBarbijos=0;
    cantJabon=0;
    contadorAlcohol=0;
    contadorBarbijo=0;
    contadorJabon=0;
    

    //Logica

    while(contador<5){

        //Actualizo contador
        contador++;

        //Obtencion y verificacion de datos


        //tipoProducto
        tipoProducto=prompt("Ingrese el tipo de producto: alcohol, jabon o barbijo.");
        while((isNaN(tipoProducto) == false) || tipoProducto != "alcohol" && tipoProducto != "jabon" && tipoProducto != "barbijo")
        {
            tipoProducto=prompt("ERROR, Ingrese el tipo de producto: alcohol, jabon o barbijo. ");
        }

        precioProducto=prompt("Ingrese el precio del producto.");
        precioProducto=parseInt(precioProducto);

        //precioProducto
        while((isNaN(precioProducto) == true) || (precioProducto < 100 && precioProducto > 300))
        {
            precioProducto=prompt("ERROR, ingrese el precio del producto");
            precioProducto=parseInt(precioProducto);
        }

        //cantidadUnidades
        cantidadUnidades=prompt("Ingrese la cantidad del producto.");
        cantidadUnidades=parseInt(cantidadUnidades);
        while((isNaN(cantidadUnidades) == true) || (cantidadUnidades < 0 && cantidadUnidades > 1000))
        {
            cantidadUnidades=prompt("ERROR, ingrese la cantidad del producto");
            cantidadUnidades=parseInt(cantidadUnidades);
        }

        //marcaProducto
        marcaProducto=prompt("Ingrese la marca del producto.");
        while((isNaN(marcaProducto) == false))
        {
            marcaProducto=prompt("ERROR, Ingrese la marca del producto. ");
        }

        //fabricanteProducto
        fabricanteProducto=prompt("Ingrese el fabricante del producto.");
        while((isNaN(fabricanteProducto) == false))
        {
            fabricanteProducto=prompt("ERROR, Ingrese el fabricante del producto. ");
        }

       if(tipoProducto == "alcohol")
        {
            if(contador==1)
            {
                alcoholMasBarato = precioProducto;
                cantAlcoholMasBarato = cantidadUnidades;
                fabricanteAlcoholMasBarato = fabricanteProducto;
            }else
            {
                if(precioProducto < alcoholMasBarato)
                {
                    alcoholMasBarato = precioProducto;
                    cantAlcoholMasBarato = cantidadUnidades;
                    fabricanteAlcoholMasBarato = fabricanteProducto;
                }
            }
        }

        switch(tipoProducto)
        {
            case "jabon":
                contadorJabon++;
                cantJabon += cantidadUnidades;
                break;
            case "barbijo":
                contadorBarbijo++;
                cantBarbijos += cantidadUnidades;
                break;
            case "alcohol":
                contadorAlcohol++;
                cantAlcohol += cantidadUnidades;
                if(contador==1)
            {
                alcoholMasBarato = precioProducto;
                cantAlcoholMasBarato = cantidadUnidades;
                fabricanteAlcoholMasBarato = fabricanteProducto;
            }else
            {
                if(precioProducto < alcoholMasBarato)
                {
                    alcoholMasBarato = precioProducto;
                    cantAlcoholMasBarato = cantidadUnidades;
                    fabricanteAlcoholMasBarato = fabricanteProducto;
                }
            }

        }

        if(cantBarbijos > cantAlcohol || cantBarbijos > cantJabon)
        {
            promedioPorCompra = (cantBarbijos / contadorBarbijo);
            mensaje="Barbijos";
        }else{
            if(cantAlcohol > cantJabon)
            {
                promedioPorCompra = (cantAlcohol / contadorAlcohol);
                mensaje="Alcohol";
            }
            else
            {
                promedioPorCompra = (cantJabon/contadorJabon);
                mensaje="Jabon";
            }
        }
    
    }

    //MUESTREO DE DATOS
    	/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 

    console.log("El alcohol mas barato tiene una cantidad de unidades de: " + cantAlcoholMasBarato + "y su fabricante es: " + fabricanteAlcoholMasBarato);
    console.log("El promedio por compra del tipo con mas unidades es de: "+ promedioPorCompra + "perteneciente a " + mensaje);
    console.log("Las unidades de jabon que hay en total son: " + cantJabon);
}



 */
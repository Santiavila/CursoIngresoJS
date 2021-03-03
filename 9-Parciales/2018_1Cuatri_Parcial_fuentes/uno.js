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
        while(isNaN(tipoIngresado) == false && tipoIngresado != "jabon" && tipoIngresado != alcohol && tipoIngresado != "barbijo")
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
        }
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

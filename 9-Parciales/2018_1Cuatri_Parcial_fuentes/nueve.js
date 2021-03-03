function mostrar()
{
    var producto;
    var marcaProducto;
    var pesoProducto;
    var temperaturaProducto;
    var seguir;
    var contadorTempPares; // %2 == 0
    var marcaMasPesada;
    var contadorProdBajoCero;
    var promedioPeso;
    var acumuladorPeso;
    var contadorPeso;
    var pesoMin;
    var pesoMax;
    var banderaDelPrimero;

    contadorTempPares = 0;
    contadorProdBajoCero=0;
    acumuladorPeso=0;
    contadorPeso=0;

    banderaDelPrimero=0;

    producto = prompt("Ingrese un producto por favor")
    marcaProducto = prompt("Ingrese la marca del producto por favor.");
    alert("Su producto es: " + producto + " y su marca es: " + marcaProducto);
    
    
    
    pesoProducto = prompt("Ingrese un peso por favor.");
    pesoProducto = parseInt(pesoProducto);
    while(isNaN(pesoProducto) == true || pesoProducto < 0 || pesoProducto > 100)
    {
        pesoProducto = prompt("El peso debe ser entre 0 a 100 salamin");
        pesoProducto = parseInt(pesoProducto);
    }
    contadorPeso = contadorPeso+1;
    acumuladorPeso = acumuladorPeso + 1;

    if(banderaDelPrimero == 0){
        pesoMax=pesoProducto;
        pesoMin=pesoProducto;
        marcaMasPesada=pesoMax;
        banderaDelPrimero==1;

        
    }else {
        if(pesoProducto > pesoMax)
        {
            pesoProducto=pesoMax;
            marcaMasPesada=pesoMax;
        }
        if(pesoProducto<pesoMin)
        {
            pesoProducto=pesoMin;
        }
        
    }
    
    temperaturaProducto = prompt("Ingrese una temperatura entre -30º a 30º.");
    temperaturaProducto = parseInt(temperaturaProducto);

    while(isNaN(temperaturaProducto) == true || temperaturaProducto < -30 || temperaturaProducto > 30)
    {
        temperaturaProducto = prompt("La temperatura debe ser entre -30º a 30º");
        temperaturaProducto = parseInt(temperaturaProducto);
    }

    if(temperaturaProducto <0) {
        contadorProdBajoCero=contadorProdBajoCero+1;
    }
    
    
    seguir = prompt("¿Desea seguir ingresando productos?");

    while(seguir == "si")
    {
        producto = prompt("Ingrese un producto por favor")
        marcaProducto = prompt("Ingrese la marca del producto por favor.");
        alert("Su producto es: " + producto + " y su marca es: " + marcaProducto);
        pesoProducto = prompt("Ingrese un peso por favor.");
        pesoProducto = parseInt(pesoProducto);
        temperaturaProducto = prompt("Ingrese una temperatura entre -30º a 30º por favor.");
        temperaturaProducto = parseInt(temperaturaProducto);
        seguir = prompt("¿Desea seguir ingresando productos?");
    }
        promedioPeso =acumuladorPeso/contadorPeso

                document.write( "La cantidad de temperaturas pares son: "+ contadorTempPares + "  "); 
                document.write( "La marca del producto mas pesado es : "+ marcaMasPesada + "  " ); 
                document.write( "La cantidad de productos que se conservan a menos de 0 grados es : "+contadorProdBajoCero + "  "); 
                document.write( "El promedio del peso de todos los productos: "+ promedioPeso + "  "); 
                document.write("El peso máximo es : " + pesoMax + "  "); 
                document.write("El peso minimo es: " + pesoMin + "  "); 

}







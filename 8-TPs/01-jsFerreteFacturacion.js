/*
Santiago Avila Ejercicio 1 del tp.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno; //txtIdPrecioUno
    var productoDos; //txtIdPrecioDos
    var productoTres;//txtIdPrecioTres
    var resultado;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoTres);
    productoDos = parseInt(productoTres);
    productoTres = parseInt(productoTres);

    resultado = (productoUno + productoDos + productoTres)

    alert(resultado);

}
function Promedio () 
{
	var productoUno; //txtIdPrecioUno
    var productoDos; //txtIdPrecioDos
    var productoTres;//txtIdPrecioTres
    var promedio; 
    var resultado;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoTres);
    productoDos = parseInt(productoTres);
    productoTres = parseInt(productoTres);
    
    resultado = (productoUno + productoDos + productoTres);
    promedio = resultado / 3;
    

    alert(promedio);
}
function PrecioFinal () 
{
	var productoUno; //txtIdPrecioUno
    var productoDos; //txtIdPrecioDos
    var productoTres;//txtIdPrecioTres
    var iva;
    var suma;
    var resultado;

    productoUno = document.getElementById("txtIdPrecioUno").value;
    productoDos = document.getElementById("txtIdPrecioDos").value;
    productoTres = document.getElementById("txtIdPrecioTres").value;

    productoUno = parseInt(productoTres);
    productoDos = parseInt(productoTres);
    productoTres = parseInt(productoTres);
    /*suma = parseInt(suma);
    iva = parseInt(iva);
    resultado = parseInt(resultado);*/
    
    suma = (productoUno + productoDos + productoTres)
    iva = suma *21 /100;
    resultado = (suma + iva);

    alert(resultado);

}
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*function CalcularPrecio () 
{
 	var cantidadLamparas;
    var precioLamparas;
    var descuentoLamparas;

    precioLamparas = 35;
    precioLamparas = parseInt(precioLamparas);
    cantidadLamparas = document.getElementById("txtIdCantidad").value; 
    descuentoLamparas =document.getElementById("txtIdprecioDescuento").value; 

}*/

//--------------------------------------------------------------------------------//

function CalcularPrecio () 
{

    // 6 $105
    //5 ArgentinaLuz 40% 5*35 $105
    //5 otra marca 30% 5*35
 	var cantidadLamparas;
    var marca;
    var precioBruto;

   
    cantidadLamparas = document.getElementById("txtIdCantidad").value; 
    cantidadLamparas=parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*35;

    if(cantidadLamparas>5)
    {
        precioBruto=precioBruto-(precioBruto*50/100)
    }else
    {
        if(cantidadLamparas == 5)
        {}
    }
    

}
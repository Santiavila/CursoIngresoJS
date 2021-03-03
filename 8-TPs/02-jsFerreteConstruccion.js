/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo;
    var ancho;
    var perimetro;
    var cantidadAlambre;
    

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo + ancho) *2;
    

    cantidadAlambre = perimetro*3;
   

    alert("Se necesitan comprar " + cantidadAlambre + " metros de alambre.");
}
function Circulo() {
    var radio;
    var perimetro;
    var cantidadAlambre;
    const pi = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = 2 * pi * radio;
    cantidadAlambre = perimetro * 3;

    alert("Se necesitan comprar " + cantidadAlambre + " metros de alambre.");

}
function Materiales() {
    var largo;
    var ancho;
    var area;
    var cemento;
    let cal; 

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3;

    alert("Para un contrapiso de " + area + " m2 necesitro comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.")

}
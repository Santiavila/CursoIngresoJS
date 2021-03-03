/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
 /*
function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var precioBruto;
  var acumuladorDePrecioBruto;
  var acumuladorCantidadTotal;
  var descuento;
  var cantidadIngresada;
  var importeTotalDescuento;
  var tipoMasCantidad;
  var acumuladorCantidadArena;
  var acumuladorCantidadCal;
  var acumuladorCantidadCemento;

  descuento = 0;
  acumuladorDePrecioBruto=0;
  acumuladorCantidadTotal=0;
  respuesta="si";


  /*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
  while(respuesta == "si")
  {
    tipoIngresado = prompt("Ingrese el tipo de producto");
    while(isNaN(tipoIngresado) == false || (tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento"))
    {
        tipoIngresado = prompt("ERROR, el tipo ingresado debe ser cal, cemento o arena.")
    }

      cantidadIngresada = prompt("Ingrese la cantidad del producto");
      cantidadIngresada = parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true || cantidadIngresada < 0)
        {
            cantidadIngresada = prompt("ERROR, ingrese la cantidad del producto.");
            cantidadIngresada = parseInt(cantidadIngresada);
        }

       precioIngresado = prompt("Ingrese el precio del producto");
       precioIngresado = parseInt(precioIngresado);
        while(isNaN(precioIngresado)==true || precioIngresado < 0)
        {
            precioIngresado = prompt("ERROR, ingrese el precio del producto.");
            precioIngresado = parseInt(precioIngresado);
        }

        switch(tipoIngresado){
          case "arena":
            acumuladorCantidadArena = acumuladorCantidadArena + cantidadIngresada;
            break;
          case "cal":
            acumuladorCantidadCal = acumuladorCantidadCal + cantidadIngresada;
            break;
          case "cemento":
            acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadIngresada;
            break;
        }
  //a) El importe total a pagar , bruto sin descuento
        
        precioBruto = cantidadIngresada * precioIngresado;
        acumuladorDePrecioBruto = acumuladorDePrecioBruto + precioBruto;

        respuesta = prompt("Desea continuar?")

        acumuladorCantidadTotal = acumuladorCantidadTotal + cantidadIngresada;
  }
  console.log("El precio bruto total a pagar es: " + acumuladorDePrecioBruto);


/*
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  b) el importe total a pagar con descuento(solo si corresponde)   
  if(acumuladorCantidadTotal > 10)
  {
    if(acumuladorCantidadTotal < 30)
    {
      descuento = 15;
    }
    else
    {
      descuento = 25;
    }
  

  importeTotalDescuento = acumuladorDePrecioBruto - (  (acumuladorDePrecioBruto * descuento) / 100);

  alert("El importe total es "+ importeTotalDescuento + "y su descuento es de " + descuento);
}
   // switch(tipoIngresado){
      case "arena":
        acumuladorCantidadArena = acumuladorCantidadArena + cantidadIngresada;
        break;
      case "cal":
        acumuladorCantidadCal = acumuladorCantidadCal + cantidadIngresada;
        break;
      case "cemento":
        acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadIngresada;
        break;
    }

//d) Informar el tipo con mas cantidad de bolsas.
    if(acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena)
    {
      tipoMasCantidad = "Arena";
    }
    else{
      if(acumuladorCantidadCal > acumuladorCantidadCemento)
      {
        tipoMasCantidad = "cal";
      }else{
        tipoMasCantidad = "cemento";
      }
    }

    console.log("El tipo con mas bolsas es: " + tipoMasCantidad);

    //Informar el tipo mas caro
    console.log("El tipo con mas cantidad es  "+ tipoMasCantidad);
  
}*/





//Ejercicio dos parcialito
/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano*/

function mostrar (){
  //Inicializo variables

  var mascotaIngresada;
  var pelajeMascota;
  var edadMascota;
  var nombreMascota;
  var razaMascota;
  var pesoMascota;
  var estadoClinico;
  var temperaturaIngresada;
  var continuar;
  var contador;
  var banderaDelPrimeroMayorPeso;
  var pesoMayorPerro;
  var nombrePerroMayorPeso;
  var porcentajeEnfermos;
  var cantMascotaIngresada;
  var cantMascotasEnfermas;
  var banderaDelPrimeroOtraCosa;
  var nombreUltimoOtraCosa;
  var banderaSinPeloTemperatura;
  var temperaturaMenorSinPelo;
  var mascotaSinPeloMenorTemp;
  var nombreMenorTempSinPelo;
  var cantPerroTempIngresada;
  var sumaPerroTempIngresada;
  var cantGatoTempIngresada;
  var sumaGatoTempIngresada;
  var cantOtraCosaTempIngresada;
  var sumaOtraCosaTempIngresada;
  var promedioTempPerro;
  var promedioTempGato;
  var promedioTempOtraCosa;
  var mensaje;
  var cantPerro;
  var cantGato;
  var cantOtraCosa;
  var porcentajePerrosGatos;
  var cantMascotasInternadas;
  var cantMascotasAdopcion;
  var mensajeMenorEstadoClinico;
  var sumaPesoMascotas;
  var promedioPesoMascotas;
  var banderaGatoSinPelosLiviano;
  var nombreGatoSinPelosLiviano;
  var razaGatoSinPeloLiviano;
  var pesoGatoSinPeloLiviano;
  
 


  //Asigno valores variables
  continuar=true;
  banderaDelPrimeroMayorPeso=0;
  pesoMayorPerro=0;
  nombrePerroMayorPeso=0;
  cantMascotaIngresada=0;
  cantMascotasEnfermas=0;
  banderaDelPrimeroOtraCosa=0;
  banderaSinPeloTemperatura=0;
  cantPerroTempIngresada=0;
  sumaPerroTempIngresada=0;
  cantGatoTempIngresada=0;
  sumaGatoTempIngresada=0;
  cantOtraCosaTempIngresada=0;
  sumaOtraCosaTempIngresada=0;
  cantPerro=0;
  cantGato=0;
  cantOtraCosa=0;
  cantMascotasInternadas=0;
  cantMascotasAdopcion=0;
  sumaPesoMascotas=0;
  banderaGatoSinPelosLiviano=0;

    //Logica del programa
  while(continuar)
  {
    //actualizo contador
    contador++;

    //Autenticacion e ingreso de datos
    //mascotaIngresada
    mascotaIngresada=prompt("Ingrese que animal es su mascota: perro, gato u otra cosa.");
    while(isNaN(mascotaIngresada)==false && 
          mascotaIngresada != "perro" && 
          mascotaIngresada != "gato" && 
          mascotaIngresada != "otra cosa")
          {
            mascotaIngresada=prompt("ERROR, ingrese una opciòn valida: perro, gato u otra cosa");
          }
          cantMascotaIngresada++;
    
          //pelajeMascota
    pelajeMascota=prompt("Ingrese el tipo de pelaje de su mascota: corto, largo o sin pelo");
    while(isNaN(pelajeMascota)==false || 
          pelajeMascota != "corto" && 
          pelajeMascota != "largo" && 
          pelajeMascota != "sin pelo")
          {
            pelajeMascota=prompt("ERROR, ingrese una opciòn valida: corto, largo o sin pelo");
          }
    //edadMascota
    edadMascota=prompt("Ingrese la edad de su mascota");
    edadMascota=parseInt(edadMascota);
    while(isNaN(edadMascota)==true || edadMascota < 1 || edadMascota > 25)
    {
      edadMascota=prompt("Ingrese la edad de su mascota");
      edadMascota=parseInt(edadMascota);
    }

    //nombreMascota
    nombreMascota=prompt("Ingrese el nombre de su mascota");
    while(isNaN(nombreMascota)==false)
          {
            nombreMascota=prompt("ERROR, ingrese el nombre de su mascota");
          }
    
    //razaMascota
    razaMascota=prompt("Ingrese la raza de su mascota");
    while(isNaN(razaMascota)==false)
          {
            razaMascota=prompt("ERROR, Ingrese la raza de su mascota");
          }
    
    //pesoMascota
    pesoMascota=prompt("Ingrese el peso de su mascota");
    pesoMascota=parseInt(pesoMascota);
    while(isNaN(pesoMascota)==true ||
     pesoMascota < 1 || pesoMascota > 70)
    {
      pesoMascota=prompt("ERROR, Ingrese el peso de su mascota");
      pesoMascota=parseInt(pesoMascota);
    }
    sumaPesoMascotas+=pesoMascota;
    
    
    //estadoClinico
    estadoClinico=prompt("Ingrese el estado clinico de su mascota.");
    while(isNaN(estadoClinico)==false || 
          estadoClinico != "enfermo" && 
          estadoClinico != "internado" && 
          estadoClinico != "adopcion")
          {
            estadoClinico=prompt("ERROR, ingrese el estado clinico de su mascota.");
          }

    //temperatura corporal
    temperaturaIngresada=prompt("Ingrese la temperatura corporal de su mascota");
    temperaturaIngresada=parseInt(temperaturaIngresada);
    while(isNaN(temperaturaIngresada)==true ||
     temperaturaIngresada < 30 || temperaturaIngresada > 40)
    {
      temperaturaIngresada=prompt("ERROR, Ingrese la temperatura de su mascota");
      temperaturaIngresada=parseInt(temperaturaIngresada);
    }

    switch(mascotaIngresada)
    {
      case "perro":
        if(banderaDelPrimeroMayorPeso == 0)
        {
          pesoMayorPerro = pesoMascota;
          nombrePerroMayorPeso = nombreMascota;

        }else
        {
          if(pesoMascota > pesoMayorPerro)
          {
            pesoMayorPerro = pesoMascota;
            nombrePerroMayorPeso = nombreMascota;
          }
        
        }
        cantPerroTempIngresada++;
        sumaPerroTempIngresada+=temperaturaIngresada;
        cantPerro++;
        break;
      
      case "gato":
        cantGatoTempIngresada++;
        cantGato++;
        sumaGatoTempIngresada+=temperaturaIngresada;

        break;

      case "otra cosa":
        if(banderaDelPrimeroOtraCosa == 0)
        {
          
          nombreUltimoOtraCosa = nombreMascota;
          banderaDelPrimeroOtraCosa=0;
        }
        cantOtraCosaTempIngresada++;
        cantOtraCosa++;
        sumaOtraCosaTempIngresada+=temperaturaIngresada;

        break;
    }

    switch(estadoClinico)
    {
      case "enfermo":
        cantMascotasEnfermas++;

        break;

      case "internado":
        cantMascotasInternadas++;

        break;

      case "adopcion":
        cantMascotasAdopcion++;

        break;
    }

    switch(pelajeMascota)
    {
      case "sin pelo":
        if(banderaSinPeloTemperatura == 0)
          {
            temperaturaMenorSinPelo = temperaturaIngresada;
            mascotaSinPeloMenorTemp = mascotaIngresada;
            nombreMenorTempSinPelo = nombreMascota;
          }
          else
          {
            if(temperaturaIngresada < temperaturaMenorSinPelo)
            {
              temperaturaMenorSinPelo = temperaturaIngresada;
              mascotaSinPeloMenorTemp = mascotaIngresada;
              nombreMenorTempSinPelo = nombreMascota;
              
            }
          }
          
          if(mascotaIngresada=="gato")
          {
            if(banderaGatoSinPelosLiviano==0)
            {
              nombreGatoSinPelosLiviano=nombreMascota;
              razaGatoSinPeloLiviano=razaMascota;
              pesoGatoSinPeloLiviano = pesoMascota;
              banderaGatoSinPelosLiviano=1; 
            }
            else
            {
              if(pesoMascota < pesoGatoSinPeloLiviano)
              {
                nombreGatoSinPelosLiviano=nombreMascota;
                razaGatoSinPeloLiviano=razaMascota;
                pesoGatoSinPeloLiviano = pesoMascota;
                banderaGatoSinPelosLiviano=1; 
              }
            }
          }

        break;
      
      case "largo":

        break;
      
      case "corto":

        break;
    }

    if(cantMascotasAdopcion < cantMascotasEnfermas && cantMascotasAdopcion < cantMascotasInternadas)
    {
      mensajeMenorEstadoClinico = "adopcion";
    }
    else
    {
      if(cantMascotasEnfermas < cantMascotasInternadas)
        {
          mensajeMenorEstadoClinico="enfermas";
        }else
        {
          mensajeMenorEstadoClinico="internadas";
        }
    }


    continuar=confirm("Desea continuar?");

  }

  //Porcentaje de mascotas enfermas sobre el total de mascotas ingresadas
  porcentajeEnfermos = (cantMascotasEnfermas/cantMascotaIngresada)*100;

  //Promedio mayor temperatura entre las mascotas ingresadas
  
  //gato
  promedioTempGato = sumaGatoTempIngresada/cantGatoTempIngresada; 
  //perro
  promedioTempPerro = sumaPerroTempIngresada/cantPerroTempIngresada;
  //otra cosa
  promedioTempOtraCosa = sumaOtraCosaTempIngresada/cantOtraCosaTempIngresada;

  if(promedioTempGato > promedioTempPerro && promedioTempGato > promedioTempOtraCosa)
  {
    mensaje="Gato";
  }
  else
  {
    if(promedioTempPerro > promedioTempOtraCosa)
    {
      mensaje="Perro";
    }else
    {
      mensaje="Otra cosa";
    }


  }

  porcentajePerrosGatos= ((cantPerro+cantGato)/cantMascotaIngresada)*100;
  
  //Promedio de peso de las mascotas

  promedioPesoMascotas = sumaPesoMascotas/cantMascotaIngresada;


console.log("El perro con mayor peso es: " + nombrePerroMayorPeso);
if(cantMascotasEnfermas > 0){
  console.log("El porcentaje de mascotas enfermas es de: " + porcentajeEnfermos);
}else{
  console.log("No hay papu");
}

console.log("El ultimo nombre ingresado en otra cosa es: " + nombreUltimoOtraCosa);
console.log("El animal sin pelo con menor temperatura es: " + mascotaSinPeloMenorTemp + " se llama: " + nombreMenorTempSinPelo + " y tiene una temperatura de: " + temperaturaMenorSinPelo);
console.log("El animal sin pelo con menor temperatura corporal es: " + mascotaSinPeloMenorTemp);
console.log("El tipo de mascota que tiene el mayor promedio de temperatura corporal es: "+ mensaje);
console.log("El porcentaje de perros y gatos sobre el total de mascotas es: " + porcentajePerrosGatos);
console.log("El estado clinico que tiene la menor cantidad de mascotas es: " + mensajeMenorEstadoClinico);
console.log("El promedio de kilos de peso tomando todas las mascotas es: " + promedioPesoMascotas);
console.log("El nombre del gato sin pelos mas liviano es: " + nombreGatoSinPelosLiviano + " su raza es " + razaGatoSinPeloLiviano + " y su peso es " + pesoGatoSinPeloLiviano);





}


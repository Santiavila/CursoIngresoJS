/*1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/
/*

function probarEjercicio()
{
	
  
    //Defino varibales
    
    var continuar;
    var nombre;
    var carrera;
    var estadoCarrera;
    var sexo;
    var edad;   
    var nota;
    var cantAlumnosProgramacion;
    var cantAlumnosDiseñoGrafico;
    var cantAlumnosPsicologia;
    var cantMujeresProgramacion;
    var cantAlumnosNoBinarios;
    var cantAlumnos;
    var sumaNotas;
    var promedioAlumnosFinalizantes;
    var banderaAlumnoMasViejo;
    var nombreMasViejo;
    var sexoMasViejo;
    var edadMasViejo;
    var banderaMejorBinario;
    var nombreMejorBinario;
    var notaMejorBinario;
    var estadoMejorBinario;
    var cantAlumnosFinalizado;
    var mensaje;
    

    //asigno valor a variables
    continuar=true;
    cantAlumnosProgramacion=0;
    cantAlumnosDiseñoGrafico=0;
    cantAlumnosPsicologia=0;
    cantMujeresProgramacion=0;
    sumaNotas=0;
    cantAlumnos=0;
    cantAlumnosFinalizado=0;
    cantAlumnosNoBinarios=0;

    //logica del programa
    while(continuar)
    {
        //Autenticacion e ingreso de datos.
        //nombre
        nombre=prompt("Ingrese su nombre.");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("ERROR, ingrese su nombre.");
        }
        cantAlumnos++;
        

        //carrera
        carrera=prompt("Ingrese la carrera en la que se encuentra.")
        while(isNaN(carrera)==false || (carrera != "programacion" && carrera != "psicologia" && carrera!="diseño grafico"))
        {
            carrera=prompt("ERROR, ingrese la carrera correcta.")
        }

        //estado de carrera
        estadoCarrera=prompt("Ingrese su estado actual en la carrera.")
        while(isNaN(estadoCarrera)==false || (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera!="finalizado"))
        {
            estadoCarrera=prompt("ERROR, ingrese el estado correcto.")
        }


        //sexo
        sexo=prompt("Ingrese su sexo.");
        while(isNaN(sexo)==false || sexo!="masculino" && sexo!="femenino" && sexo!="nobinario")
        {
            sexo=prompt("ERROR, ingrese su sexo.");
        }
        

        //edad
        edad=prompt("Ingrese su edad.");
        edad=parseInt(edad)
        while(isNaN(edad)==true || edad < 18)
        {
            edad=prompt("ERROR, ingrese su edad, debe ser mayor a 18 años.");
            edad=parseInt(edad);
        }

        //nota del alumno
        nota=prompt("Ingrese su nota.");
        nota=parseInt(nota)
        while(isNaN(nota)==true || nota < 1 || nota > 10)
        {
            nota=prompt("ERROR, ingrese su nota, debe ser entre 1 y 10.");
            nota=parseInt(nota);
        }

        //A. Cantidad total de alumnos de cada carrera.

        switch(carrera)
        {
            case "programacion":
                
                cantAlumnosProgramacion++;
                break;
            case "diseño grafico":
                cantAlumnosDiseñoGrafico++;
                break;
            case "psicologia":
                    if(banderaAlumnoMasViejo==0)
                    {
                        nombreMasViejo=nombre;
                        sexoMasViejo=sexo;
                        edadMasViejo=edad;
                        banderaAlumnoMasViejo=1;
                    }
                    else
                    {
                        if(edad > edadMasViejo)
                        {
                            nombreMasViejo=nombre;
                            sexoMasViejo=sexo;
                            edadMasViejo=edad;
                        }
                    }
                cantAlumnosPsicologia++;
                break;
        }

        switch(sexo)
        {
            case "nobinario":
                if(banderaMejorBinario==0)
                {
                    nombreMejorBinario=nombre;
                    notaMejorBinario=nota;
                    estadoMejorBinario=edad;
                    banderaMejorBinario=1;
                }
                else
                {
                    if(nota > notaMejorBinario)
                    {
                        nombreMejorBinario=nombre;
                        notaMejorBinario=nota;
                        estadoMejorBinario=edad;
                        banderaMejorBinario=1;
                    }
                }

                cantAlumnosNoBinarios++;

                break;
        case "masculino":

                break;
        case "femenino":
            if(estadoCarrera == "programacion")
                {
                    cantMujeresProgramacion++;
                }

                break;
        }

        switch(estadoCarrera)
        {
            case "finalizado":
                sumaNotas+=nota;
                cantAlumnosFinalizado++;

                break;
        case "en curso":

                break;
        case "abandonado":

                break;
        }

        if(cantAlumnosDiseñoGrafico > cantAlumnosProgramacion && cantAlumnosDiseñoGrafico > cantAlumnosPsicologia)
        {
            mensaje="Diseño Grafico";
        }
        else
        {
            if(cantAlumnosPsicologia > cantMujeresProgramacion)
            {
                mensaje="Psicologia";
            }
            else
            {
                mensaje="Programacion";
            }
        }


        //peticion de si desea seguir ingresando datos
        continuar=confirm("Desea seguir ingresando datos?");
    }

    promedioAlumnosFinalizantes= sumaNotas/cantAlumnosFinalizado;
    
    if(cantAlumnosPsicologia)
            {
    console.log("La cantidad de alumnos de psicologia es: " + cantAlumnosPsicologia);
            }
            else
            {
                console.log("No hay alumnos de psicologia");
            }
            if(cantAlumnosProgramacion)
            {
    console.log("La cantidad de alumnos de programacion es: " + cantAlumnosProgramacion);
            }
            else
            {
                console.log("No hay alumnos de programacion");
            }
            if(cantAlumnosDiseñoGrafico)
            {
    console.log("La cantidad de alumnos de Diseño Grafico es: " + cantAlumnosDiseñoGrafico);
            }
            else
            {
                console.log("No hay alumnos de Diseño Grafico");
            }
            if(cantMujeresProgramacion)
            {
                console.log("La cantidad de mujeres que cursan programacion son: " + cantMujeresProgramacion);
            }
            else
            {
                console.log("No hay alumnas en programacion.")
            }
            if(cantAlumnosNoBinarios)
            {
                console.log("La cantidad de no binarios es: " + cantAlumnosNoBinarios);
            }
            else
            {
                console.log("No hay alumnos no binarios.")
            }
    
    console.log("El promedio de notas de los alumnos finalizantes es: " + promedioAlumnosFinalizantes);
    console.log("El alumno mas viejo de la carrera de Psicologia es : " + nombreMasViejo + " con una edad de: " + edadMasViejo + " y su sexo es: " + sexoMasViejo);
    console.log("El mejor alumno no binario es: " +  nombreMejorBinario + " con una nota de: " + notaMejorBinario + " y su estado en la cursada es: " + estadoMejorBinario);
    console.log("La carrera que tiene mas alumnos es: " + mensaje);
    


 
    /*   A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?

}
*/

/*
2- "super chino" Se pide el ingreso de
 mercadería de un supermercado , 
 hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)
solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/

function probarEjercicio()
{

    var continuar;
    var tipo;
    var nombre;
    var importe;
    var procedencia;
    var peso;
    var banderaDelMasPesado;
    var nombreDelMasPesado;
    var pesoDelMasPesado;
    var banderaDelMasCaro;
    var nombreDelMasCaro;
    var precioDelMasCaro;
    var banderaDelMasBarato;
    var nombreDelMasBarato;
    var precioDelMasBarato;
    var cantComestibles;
    var cantLimpieza;
    var cantOtro;
    var cantProductosElaborados;
    var cantProductosProc;
    var porcentajeElaboradosSobreTotal;
    var cantProductosImportados;
    var cantProductosNacional;
    var sumaPrecioElaborados;
    var sumaPreciosImportados;
    var sumaPreciosNacional;
    var promedioImportados;
    var promedioNacional;
    var promedioElaborados;
    var mensaje;

    //asigno valor a variables

    continuar = true;
    banderaDelMasPesado=0;
    banderaDelMasCaro=0;
    banderaDelMasBarato=0;
    cantLimpieza=0;
    cantComestibles=0;
    cantOtro=0;
    cantProductosElaborados=0;
    cantProductosProc=0;
    cantProductosImportados=0;
    cantProductosNacional=0;
    


    while(continuar)
    {
        tipo=prompt("Ingrese el tipo de mercaderia");
        while(isNaN(tipo)==false || tipo != "limpieza" && tipo!="comestible" && tipo != "otro")
        {
            tipo=prompt("ERROR, ingrese el tipo de mercaderia");
        }

        //nombre
        nombre=prompt("Ingrese el nombre del producto");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("ERROR, ingrese el nombre del producto");
        }

        //importe
        importe=prompt("Ingrese el importe del producto");
        importe=parseInt(importe);
        while(isNaN(importe)==true || importe < 0 || importe > 1000)
        {
            importe=prompt("ERROR, ingrese el importe del producto");
            importe=parseInt(importe);
        }

        //procedencia
        procedencia=prompt("Ingrese la procedencia");
        while(isNaN(procedencia)==false || procedencia != "importado" && procedencia!="nacional" && procedencia != "elaborado")
        {
            procedencia=prompt("ERROR, ingrese la procedencia");
        }
        cantProductosProc++;
        //peso
        peso=prompt("Ingrese el peso del producto");
        peso=parseInt(peso);
        while(isNaN(peso)==true || peso > 30)
        {
            peso=prompt("ERROR, ingrese el peso del producto");
            peso=parseInt(peso);
        }

        switch(tipo)
        {
            case "comestible":
                //NOMBRE DEL MAS PESADO DE LOS COMESTIBLES
                if(banderaDelMasPesado == 0)
                {
                    nombreDelMasPesado=nombre;
                    pesoDelMasPesado=peso;
                    banderaDelMasPesado=1
                }
                else
                {
                    if(peso > pesoDelMasPesado)
                    {
                        nombreDelMasPesado=nombre;
                        pesoDelMasPesado=peso;
                    }
                }
                cantComestibles++;
                break;
            case "limpieza":
                cantLimpieza++;
                break;
            case "otro":
                cantOtro++;
                break;
    
        }

        //NOMBRE DEL MAS CARO DE TODOS LOS PRODUCTOS

        if(banderaDelMasCaro == 0)
                {
                    nombreDelMasCaro=nombre;
                    precioDelMasCaro=precio;
                    banderaDelMasCaro=1
                }
                else
                {
                    if(precio > precioDelMasCaro)
                    {
                        nombreDelMasCaro=nombre;
                        precioDelMasCaro=precio;
                    }
                }
        
        //NOMBRE DEL MAS BARATO DE LOS ELABORADOS
            switch(procedencia)
            {
                case "elaborado":
                    if(banderaDelMasBarato == 0)
                    {
                        nombreDelMasBarato=nombre;
                        precioDelMasBarato=precio;
                        banderaDelMasBarato=1;
                    }
                    else
                    {
                        if(precio < precioDelMasBarato)
                        {
                            nombreDelMasBarato=nombre;
                            precioDelMasBarato=precio;
                        }
                    }
                    cantProductosElaborados++;
                    sumaPrecioElaborados+=precio;
                    break;
                case"importado":
                    cantProductosImportados++;
                    sumaPreciosImportados+=precio;
                    break;
                case "nacional":
                    cantProductosNacional++;
                    sumaPreciosNacional+=precio;
                    break;
            }
        
        if(cantProductosNacional > cantProductosImportados && cantProductosNacional > cantProductosElaborados)
        {
            mensaje="Nacional";
        }
        else
        {
            if(cantProductosImportados > cantProductosElaborados)
            {
                mensaje="Importados";
            }
            else
            {
                mensaje="Elaborados";
            }
        }
    }

    porcentajeElaboradosSobreTotal = (cantProductosElaborados/cantProductosProc) *100;
    promedioElaborados = sumaPrecioElaborados/cantProductosElaborados;
    promedioImportados = sumaPreciosImportados/cantProductosImportados;
    promedioNacional = sumaPreciosNacional/cantProductosNacional;

    console.log("El mas pesado de los comestibles es: " + nombreDelMasPesado);
    console.log("El mas caro de todos los productos es: " + nombreDelMasCaro);
    console.log("El mas baratos de los elaborados es: " + nombreDelMasBarato);
    console.log("El tipo de mercaderia que mas aparece es: " + mensaje);
    console.log("El porcentaje de los elaborados por sobre el total es; " + porcentajeElaboradosSobreTotal);
    console.log("El promedio de pesos de elaborados es " + promedioElaborados);
    console.log("El promedio de pesos de importados es" + promedioImportados);
    console.log("El promedio de pesos de nacionales es" + promedioNacional);


}
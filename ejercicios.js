/*****************************************************
/*****************************************************
-- Lenguajes de Programación para la Administración --

---------- Ejercicios de JavaScript Basico -----------

Descripción
-----------

Se deben resolver cada uno de los siguientes ejercicios y subirlos todos juntos 
a un nuevo repositorio en Github.
Por favor resolverlos en el orden planteado y hacer un commit por cada 
ejercicio resuelto.
Agregar el enunciado de cada ejercicio como comentario en la solución del mismo.

/*****************************************************
/*****************************************************/

/*----------------------------------------------------
Listado de ejercicios:
----------------------

1) Variables y Operadores
    a) Crear dos variables numéricas y utilizar el operador suma para guardar el 
    valor de la suma de ambos números en una 3er variable.*/

    var num1 = 10;
    var num2 = 100;

    var resultadosuma = num1 + num2;

    console.log('1.a) La suma de num1 = ' + num1 + ', y num2 = ' + num2 + 
    ', es: ' + resultadosuma);

/*  b) Crear dos variables de tipo String y concatenarlas guardando el resultado 
    en una 3er variable.*/

    var cadena1 = 'Hola ';
    var cadena2 = 'Mundo!!!';

    var concatenaCadenas = cadena1 + cadena2;

    console.log('1.b) La concatenación de cadena1 = "' + cadena1 + 
    '", y cadena2 = "' + cadena2 + '", es: "' + concatenaCadenas + '"');

/*  c) Crear dos variables de tipo String y sumar el largo de cada variable 
    (cantidad de letras del string) guardando el resultado la suma una 3er 
    variable (utilizar length).*/
    
    var cadena1 = 'Hola ';
    var cadena2 = 'Mundo!!!';

    var largoTotal = cadena1.length + cadena2.length;

    console.log('1.c) La suma del largo de cadena1: "' + cadena1 + 
    '" (de longitud: ' + cadena1.length + ' ), y el largo de cadena2: "' +
    cadena2 + '" (de longitud: ' + cadena2.length + '), es: ' + largoTotal);
    

/*
2) Strings
    a) Crear una variable de tipo string con al menos 10 caracteres y convertir 
    todo el texto en mayúscula (utilizar toUpperCase).*/
    
    var cadenaLarga = 'Este texto es largo';

    console.log('2.a) El contenido de la variable cadenaLarga, es "' + 
    cadenaLarga + '", convertido todo a mayúsculas, el resultado es: "' + 
    cadenaLarga.toUpperCase() +'" ');

/*  b) Crear una variable de tipo string con al menos 10 caracteres y generar 
    un nuevo string con los primeros 5 caracteres guardando el resultado en una 
    nueva variable (utilizar substring).*/
    
    var cadenaLarga = 'Este texto es largo';

    var losPrimeros5 = cadenaLarga.substring(0,5);

    console.log('2.b) El contenido de la variable cadenaLarga, es "' + 
    cadenaLarga + '", la variable losPrimeros5 contiene: "' + 
    losPrimeros5 +'", que son los primeros 5 caracteres. ');

/*  c) Crear una variable de tipo string con al menos 10 caracteres y generar un 
    nuevo string con los últimos 3 caracteres guardando el resultado en una 
    nueva variable (utilizar substring).*/
    
    var cadenaLarga = 'Este texto es largo';

    var losUltimos3 = cadenaLarga.substring(cadenaLarga.length-3);

    console.log('2.c) El contenido de la variable cadenaLarga, es "' + 
    cadenaLarga + '", la variable losUltimos3 contiene: "' + 
    losUltimos3 +'", que son los ultimoos 3 caracteres.');

/*  d) Crear una variable de tipo string con al menos 10 caracteres y generar un 
    nuevo string con la primera letra en mayúscula y las demás en minúscula. 
    Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
    toLowerCase y el operador +).*/
    
    var cadenaLarga = 'este texto TIENE variaciones';

    var primeraMayuscula = cadenaLarga.substring(0,1).toUpperCase();
    var restoMinuscula = cadenaLarga.substring(1).toLowerCase();
    var nuevaCadena = primeraMayuscula + restoMinuscula;

    console.log('2.d) El contenido de la variable cadenaLarga, es "' + 
    cadenaLarga + '", la variable nuevaCadena contiene: "' + 
    nuevaCadena +'", que es el mismo texto con la primer letra en mayúsculas ' 
    + 'y el resto en minúsculas.');


/*  e) Crear una variable de tipo string con al menos 10 caracteres y algún 
    espacio en blanco. Encontrar la posición del primer espacio en blanco y 
    guardarla en una variable (utilizar indexOf).*/
    
    var cadenaLarga = 'este texto TIENE variaciones';

    var posicion = cadenaLarga.indexOf(" ");

    console.log('2.e) El contenido de la variable cadenaLarga, es "' + 
    cadenaLarga + '", la posicion del primer espacio en blanco es: ' + 
    posicion + ', que es el contenido de la variable posicion');


/*  f) Crear una variable de tipo string con al menos 2 palabras largas (10 
    caracteres y algún espacio entre medio). Utilizar los métodos de los 
    ejercicios anteriores para generar un nuevo string que tenga la primera 
    letra de ambas palabras en mayúscula y las demás letras en minúscula 
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

    var cadenaDosPalabras = 'invAriablEmentE fAntAsticO';

    var posicion = cadenaDosPalabras.indexOf(" ");

    var primerPalabra = cadenaDosPalabras.substring(0,1).toUpperCase() + 
    cadenaDosPalabras.substring(1,posicion).toLowerCase();
    
    var segundaPalabra = 
    cadenaDosPalabras.substring((posicion+1),posicion+2).toUpperCase() + 
    cadenaDosPalabras.substring((posicion+2)).toLowerCase();

    var nuevoString = primerPalabra + ' ' + segundaPalabra;
    
    console.log('2.f) El contenido de la variable cadenaDosPalabras, es "' + 
    cadenaDosPalabras + '", la posicion del primer espacio en blanco es: ' + 
    posicion + ', y el contenido de la variable nuevoString es: "' +
    nuevoString + '", que resulta de poner todo en minúsculas '
    + 'salvo las primeras letras de cada palabra');





    
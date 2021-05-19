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

/*----------------------------------------------------

/*****************************************************
******************************************************
*************   A T E N C I O N ! ! !  ***************
******************************************************
******************************************************
***                                                ***
***     Para observar los resultados, abrir la     ***
***     pagina index.html, y abrir la vista de     ***     
***     consola en el navegador (en Chrome, ir     ***
***     a "inspeccionar" y abrir la vista de       ***
***     consola).                                  ***
***                                                ***
***     La pagina index.html ejecuta el            ***
***     archivo ejercicios.js en su apertura.      ***
***                                                ***
***     En la pagina index.html, tambien se        ***
***     observarán los cuadros de alerta de        ***
***     los ejercicios que lo propongan.           ***
***                                                ***
******************************************************
******************************************************
**************   A T E N C I O N ! ! !  **************
******************************************************
******************************************************

/*----------------------------------------------------
Listado de ejercicios:
----------------------

>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 1  <<<<<<<<<<<<<<<<<<<<<<<<<

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
>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 2  <<<<<<<<<<<<<<<<<<<<<<<<<

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




/*
>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 3  <<<<<<<<<<<<<<<<<<<<<<<<<
3) Arrays
    a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/

    var arrayMeses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];
    
    console.log('3.a) El mes 5 es: ' + arrayMeses1[4] + ' , el mes 11 es: ' + arrayMeses1[10]);



/*  b) Ordenar el array de meses alfabéticamente y mostrarlo por consola 
    (utilizar sort).*/

    var arrayMeses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];
    
    console.log('3.b) El array sin ordenar es: ' + arrayMeses2);
    
    console.log('El array ordenado es: ' + arrayMeses2.sort());



/*  c) Agregar un elemento al principio y al final del array (utilizar unshift 
    y push).*/

    var arrayMeses3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];
    
    console.log('3.c) El array original es: ' + arrayMeses3);

    arrayMeses3.unshift("Primero");

    arrayMeses3.push("Ultimo");
    
    console.log('El array modificado es: ' + arrayMeses3);


    
/*  d) Quitar un elemento del principio y del final del array (utilizar shift 
    y pop).*/

    var arrayMeses4 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];
    
    console.log('3.d) El array original es: ' + arrayMeses4);

    arrayMeses4.shift();

    arrayMeses4.pop();
    
    console.log('El array modificado es: ' + arrayMeses4);



/*  e) Invertir el orden del array (utilizar reverse)*/

    var arrayMeses5 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];

    console.log('3.e) El array original es: ' + arrayMeses5);

    console.log('El array invertido es: ' + arrayMeses5.reverse());
   


/*  f) Unir todos los elementos del array en un único string donde cada mes este 
    separado por un guión - (utilizar join).*/

    var arrayMeses6 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];

    console.log('3.f) El array original es: ' + arrayMeses6);

    var cadenaConGuiones = arrayMeses6.join('-');

    console.log('El array como string de meses separados por guiones es: ' 
    + cadenaConGuiones);
   


/*  g) Crear una copia del array de meses que contenga desde Mayo hasta 
    Noviembre (utilizar slice).*/

    var arrayMeses7 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"];

    console.log('3.g) El array original es: ' + arrayMeses7);

    var mesesMayNov = arrayMeses7.slice(4,11);

    console.log('El array mesesMayNov contiene: ' + mesesMayNov);
       



/*
>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 4  <<<<<<<<<<<<<<<<<<<<<<<<<
4) If Else
    a) Crear un número aleatorio entre 0 y 1 utilizando la función 
    Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con 
    el mensaje “Greater than 0,5” y sino un alerta con el mensaje 
    “Lower than 0,5”*/

    var num = Math.random();

    if (num >= 0.5) {
        console.log('4.a) Greater than 0,5');
        console.log('(el número es: ' + num + ')');
    } 
    else {
        console.log('4.a) Lower than 0,5');
        console.log('(el número es: ' + num + ')');
    }



/*  b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y 
    muestre los siguientes mensajes de alerta:
        i) “Bebe” si la edad es menor a 2 años
            ii) “Nino” si la edad es entre 2 y 12 años
            iii) “Adolecente” si la edad es entre 13 y 19 años
            iv) “Joven” si la edad está entre 20 y 30 años
            v) “Adulto” entre 31 y 60 años
            vi) “Adulto mayor” entre 61 y 75 años
            vii) “Anciano” si es mayor a 75 años*/

            
        var Age = Math.trunc( (Math.random() * 100) );

        if (Age < 2) {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Bebe');
        } 
        else if (Age <= 12) {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Nino');
        }
        else if (Age <= 19) {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Adolecente');
        }
        else if (Age <= 30) {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Joven');
        }
        else if (Age <= 60) {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Adulto');
        }
        else if (Age <= 75) {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Adulto mayor');
        }
        else {
            console.log('4.b) La edad ' + Age + ' años corresponde a: Anciano');
        }
    
    
/*
>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 5  <<<<<<<<<<<<<<<<<<<<<<<<<
5) For
    a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
    un bucle for de JavaScript para mostrar una alerta utilizando cada una de 
    las palabras.*/

    var animals = ["pigs", "goats", "sheep", "cows", "chickens"];
    
    console.log('los elementos del array son: ' + animals);
    
    //Para poder ver estos alertas, hay que abrir la pagina index.html
    //y en la vista consola se observaran las salidas de consola 
    for (var i = 0; i < 5; i++) {
        var mensaje = 'El animal en el orden ' + i + ' es: ' + animals[i];
        window.alert(mensaje);
    }

/*  b) Al array anterior convertir la primera letra de cada palabra en mayúscula 
    y mostrar una alerta por cada palabra modificada.*/

       


/*    c) Crear una variable llamada “sentence” que tenga un string vacío, luego 
    al array del punto a) recorrerlo con un bucle for para ir guardando cada 
    palabra dentro de la variable sentence. Al final mostrar una única alerta 
    con la cadena completa.*/

/*    d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el 
    array con el número de la repetición, es decir que al final de la ejecución 
    del bucle for deberia haber 10 elementos dentro del array, desde el número 0 
    hasta al numero 9. Mostrar por la consola del navegador el al array final 
    (utilizar console.log).*/
    



/*
>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 6  <<<<<<<<<<<<<<<<<<<<<<<<<
6) Funciones
    a) Crear una función suma que reciba dos valores numéricos y retorne el 
    resultado. Ejecutar la función y guardar el resultado en una variable, mostrando
    el valor de dicha variable en la consola del navegador.*/

/*  b) A la función suma anterior, agregarle una validación para controlar si alguno
    de los parámetros no es un número, mostrar una alerta aclarando que uno de los 
    parámetros tiene error y retornar el valor NaN como resultado.*/

/*  c) Crear una función validate integer que reciba un número como parámetro y 
    devuelva verdadero si es un número entero.*/

/*  d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los 
    números sean enteros. En caso que haya decimales mostrar un alerta con el error 
    y retorna el número convertido a entero (redondeado).*/

/*  e) Convertir la validación del ejercicio 6b) en una función separada y llamarla 
    dentro de la función suma probando que todo siga funcionando igual.*/


    
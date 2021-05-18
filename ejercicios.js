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

    resultadosuma = num1 + num2;

    console.log('1.a) La suma de num1 = ' + num1 + ', y num2 = ' + num2 + ', es: ' 
    + resultadosuma);

/*  b) Crear dos variables de tipo String y concatenarlas guardando el resultado 
    en una 3er variable.*/

    var cadena1 = 'Hola ';
    var cadena2 = 'Mundo!!!';

    concatenaCadenas = cadena1 + cadena2;

    console.log('1.b) La concatenación de cadena1 = ' + cadena1 + ', y cadena2 = ' 
    + cadena2 + ', es: ' + concatenaCadenas);

/*  c) Crear dos variables de tipo String y sumar el largo de cada variable 
    (cantidad de letras del string) guardando el resultado la suma una 3er 
    variable (utilizar length).*/
    
    var cadena1 = 'Hola ';
    var cadena2 = 'Mundo!!!';

    largoTotal = cadena1.length + cadena2.length;

    console.log('1.c) La suma del largo de cadena1 (de longitud: ' + cadena1.length 
    + ' ), y el largo de cadena2 (de longitud: ' + cadena2.length + '), es: ' 
    + largoTotal);
    


    
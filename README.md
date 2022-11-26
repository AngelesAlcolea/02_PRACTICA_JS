# Práctica de JavaScript desde 0
## Del módulo de "Introducción  a JavaScript" de KeepCoding.

### ¿En qué consiste?
Crear un programa que permita elegir entre 15 opciones para ver o modificar los datos de una lista dada de estudiantes.

### Contenido de los ficheros:
---
#### 1 CHALLENGE.md
  
Contiene las instruciones facilitadas por el profesor para realizar la práctica.

#### 2 Practica_Alcolea.js (main)  
En este archivo se encuentra el código completo para que la práctica funcione con todos los requisitos.

#### 3 Practica_Alcolea_Import.js (main)  
Contiene el mismo código de la práctica inicial pero separado en diferentes archivos para aligerar el programa y darle mejor funcionalidad.

En este, concretamente, se situa la funcion que pide un input al usuario mediante la consola, para que elija una opción de las 15 disponibles, la promesa que gestiona la asincronía de este imput y el await para que el resto de código espere a la resolución de la promesa.  
Cuando esta se resuelve, se ejecutan la opción elegida y se muestra de nuevo el menú de opciones.

#### 4 Readme.md

Archivo en el que nos encontramos, que detalla la descripción del programa.

#### 5 challenge.js  
Aquí estan los datos concretos proporcionados en el CHALLENGE: listado de alumnos y otras funcionalidades??

#### 6 database.js 

Con este archivo accedemos a los datos de la lista de estudiantes proporcionados en el challenge.

#### 7 functions.js

En este archivo importamos las opciones que se resuelven en el archivo options.js.  
Mostramos las 15 opciones del showMenu por consola.  
Tambien aquí se desarrolla la función ejecuteOption con un switch de cada opción.

#### 8 options.js

Aquí se desarrollan las funciones de cada opción, una a una según el caso, se muestran por consola y se exportan para poder ejecutarlas en el archivo functions.js  
#### 9 package.jason  
    "type": "module"


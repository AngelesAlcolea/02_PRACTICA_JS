# Práctica de JavaScript desde 0
## Del módulo de "Introducción  a JavaScript" de KeepCoding.

### ¿En qué consiste?
Crear un programa que permita elegir entre 15 opciones para ver o modificar los datos de una lista dada de estudiantes.

### Contenido de los ficheros:
---
#### 1 challenge.js
  
Contiene las instruciones facilitadas para empezar la práctica.

#### 2 Practica_Alcolea_Import.js (main)
 
Contiene las funciones que piden input al usuario a través de la consola, pudiendo elegir entre las 15 opciones disponibles.  
Este imput se gestiona con una promesa que se resuelve con un await que nos permite ejecutar la opción elegida.

#### 3 database.js 

Con este archivo accedemos a los datos de la lista de estudiantes proporcionados en el challenge.

#### 4 functions.js

En este archivo importamos las opciones que se resuelven en el archivo options.js.  
Mostramos las 15 opciones del showMenu por consola.  
Tambien aquí se desarrolla la función ejecuteOption con un switch de cada opción.

#### 5 options.js

Aquí se desarrollan las funciones de cada opción una a una según el caso y se muestran por consola y se exportan para poder ejecutarlas en el archivo functions.js

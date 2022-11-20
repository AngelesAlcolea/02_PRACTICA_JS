//Apartado de imports
import { randomInt } from 'crypto';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Base de datos de alumnos
let students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
}];

//Lista con los nombres de los alumnos
let names = [];

//Menú de opciones
function showMenu() {
    console.log("")
    console.log("1- Mostrar en formato de tabla todos los alumnos.")
    console.log("2- Mostrar la cantidad de alumnos que hay en clase.")
    console.log("3- Mostrar todos los nombres de los alumnos.")
    console.log("4- Eliminar el último alumno de la clase.")
    console.log("5- Eliminar un alumno aleatoriamente de la clase.")
    console.log("6- Mostrar todos los datos de los alumnos que son chicas.")
    console.log("7- Mostrar el número de chicos y chicas que hay en la clase.")
    console.log("8- Mostrar true o false si todos los alumnos de la clase son chicas.")
    console.log("9- Mostrar los nombres de los alumnos que tengan entre 20 y 25 años.")
    console.log("10- Añadir un alumno nuevo con los siguientes datos:")
    console.log("\tnombre aleatorio.")
    console.log("\tedad aleatoria entre 20 y 50 años.")
    console.log("\tgénero aleatorio.")
    console.log("\tlistado de calificaciones vacío.")
    console.log("11- Mostrar el nombre de la persona más joven de la clase.")
    console.log("12- Mostrar la edad media de todos los alumnos de la clase.")
    console.log("13- Mostrar la edad media de las chicas de la clase.")
    console.log("14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.")
    console.log("15- Ordenar el array de alumnos alfabéticamente según su nombre.)")
    console.log("")
};

//Selector de opciones
function executeOption(opt) {
    switch (opt) {
        case "1":
            console.table(students)
            break;
        case "2":
            console.log("\nNúmero de estudiantes: " + students.length);
            break;
        case "3":
            //Recorrer la lista para obtener los nombres 
            names = students.map(function(obj) {
                return obj.name;
            });
            console.log("\nLos nombres de los alumnos son: ", names)
            break;
        case "4":
            students.pop()
            console.log("\nEl último alumno ha sido eliminado. Si desea ver la lista de alumnos restantes elija la opción 1.")
            break;
        case "5":
            students.splice(randomInt(0,students.length), 1);
            console.log("\nUn alumno ha sido eliminado aleatoriamente. Si desea ver la lista de alumnos restantes elija la opción 1.")
            break;
        case "6":
            break;
        case "7":
            break;
        case "8":
            break;
        case "9":
            break;
        case "10":
            break;
        case "11":
            break;
        case "12":
            break;
        case "13":
            break;
        case "14":
            break;
        case "15":
            break;
        default:
            break;
    }
};

//Pedir número
function getOptionFromConsole() {
    showMenu();
    const promise = new Promise((resolve, reject) => {
        rl.question('\Elije una opción: ', (num) => {
        rl.pause();
        resolve(num)
      // si el usuario mete un número, resolvemos la promesa con ese número.
      // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
    })
  })

  return promise;
};

//Pedir opción y devolver resultado
let opt = await getOptionFromConsole();
executeOption(opt);

//Volver a pedir opción o terminar
while (opt >= 1 && opt <= 15) {
    opt = await getOptionFromConsole();
    if (opt >=1 && opt<=15) {
        executeOption(opt);
    } else {
        break
    }
};

rl.close();
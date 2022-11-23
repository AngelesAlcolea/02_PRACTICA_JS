import { option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15 } from "./options.js"

//Menú de opciones
export function showMenu() {
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
export function executeOption(opt) {
    switch (opt) {
        case "1":
            option1();
            break;
        case "2":
            option2();
            break;
        case "3":
            option3();
            break;
        case "4":
            option4();
            break;
        case "5":
            option5();
            break;
        case "6":
            option6();
            break;
        case "7":
            option7();
            break;
        case "8":
            option8();
            break;
        case "9":
            option9();
            break;
        case "10":
            option10();
            break;
        case "11":
            option11();
            break;
        case "12":
            option12();
            break;
        case "13":
            option13();
            break;
        case "14":
            option14();
            break;
        case "15":
            option15();
            break;
        default:
            break;
    }
};
import { randomInt } from 'crypto';
import { students } from "./database.js"


export function option1() {
    console.log("\nTabla de estudiantes:");
    console.table(students);
};

export function option2() {
    console.log("\nNúmero de estudiantes: " + students.length);
};

export function option3() {
    let names = students.map(function(obj) {
        return obj.name;
    });
    console.log("\nLos nombres de los alumnos son: ", names)
};

export function option4() {
    students.pop();
    console.log("\nEl último alumno ha sido eliminado. Si desea ver la lista de alumnos restantes elija la opción 1.");
};

export function option5() {
    students.splice(randomInt(0,students.length), 1);
    console.log("\nUn alumno ha sido eliminado aleatoriamente. Si desea ver la lista de alumnos restantes elija la opción 1.")
};